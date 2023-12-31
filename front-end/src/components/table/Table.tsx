'use client';

import React, { useState, useEffect } from 'react';
import Modal from '../modal/Modal';
import ButtonOpenModal from './ButtonOpenModal';
import ButtonDeleteNote from './ButtonDeleteNote';
import { getDados } from '@/app/api/dados/route';
import { formatarData, formatarBimestre } from 'src/utils';
import Nota from './Nota';
import { Resultado } from 'src/types/Types';

function Table() {
  const [resultados, setResultados] = useState<Resultado[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDado, setSelectedDado] = useState<Resultado | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDados();
        setResultados(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  const resultadosPorBimestre: Record<Resultado['bimestre'], Resultado[]> =
    resultados.reduce(
      (acc, resultado) => {
        const bimestre = resultado.bimestre;
        if (!acc[bimestre]) {
          acc[bimestre] = [];
        }
        acc[bimestre].push(resultado);
        return acc;
      },
      {} as Record<Resultado['bimestre'], Resultado[]>
    );

  const deleteView = (id: string) => {
    setResultados((prevResultados) =>
      prevResultados.filter((resultado) => resultado._id !== id)
    );
  };

  return (
    <>
      <ul className="grid gap-6 items-center h-full pt-20 min-w-80">
        {Object.entries(resultadosPorBimestre).map(([bimestre, dados]) => (
          <li key={bimestre}>
            <div>
              <div className="flex justify-between my-4">
                <h1>{`Bimestre ${formatarBimestre(bimestre)}`}</h1>
                <ButtonOpenModal
                  modalOpen={modalOpen}
                  dado={selectedDado}
                  onClick={(estado) => [setModalOpen(estado)]}
                />
              </div>
              <div>
                {dados.map((dado: Resultado, index) =>
                  dado.disciplina && dado.nota ? (
                    <div
                      key={dado._id || index}
                      className=" flex items-start gap-4"
                    >
                      {modalOpen && (
                        <Modal
                          dado={dado}
                          modalOpen={modalOpen}
                          onClick={(estado) => setModalOpen(estado)}
                        />
                      )}
                      <div
                        className={`flex flex-col text-left h-36 w-40 rounded-2xl justify-between ${
                          dado.disciplina === 'Biologia'
                            ? 'bg-customPink'
                            : dado.disciplina === 'Artes'
                              ? 'bg-customBlue'
                              : dado.disciplina === 'Geografia'
                                ? 'bg-customBrown'
                                : 'bg-customPurple'
                        }`}
                      >
                        <div>
                          <h3 className="pl-4 pt-4">{dado.disciplina}</h3>
                          <span className="pl-4">
                            {formatarData(dado.updatedAt)}
                          </span>
                        </div>
                        <Nota nota={dado.nota} />
                      </div>
                      <ButtonDeleteNote dado={dado} deleteView={deleteView} />
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Table;
