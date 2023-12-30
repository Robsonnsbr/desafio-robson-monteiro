'use client';
import React, { useState, useEffect } from 'react';

import { Resultado } from 'src/types/Types';

import ButtonDeleteNote from './ButtonDeleteNote';
import ButtonModal from '../modal/ButtonModal';
import { fetchResultados } from '@/app/api/dados/route';

function Table() {
  const [resultados, setResultados] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchResultados();
        setResultados(data);
      } catch (error) {
        console.error('Erro ao buscar resultados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ul className="grid gap-4 items-center h-full pt-28">
      {resultados.map((dado: Resultado, index) => (
        <li key={dado.id || index}>
          <div>
            <div className="flex justify-between mb-7">
              <h1>{dado.bimestre}</h1>
              <ButtonModal />
            </div>
            <div className="flex items-start gap-2">
              <div
                className={`text-left h-36 w-40 ${
                  dado.disciplina === 'Biologia'
                    ? 'bg-green-400'
                    : dado.disciplina === 'Artes'
                      ? 'bg-blue-500'
                      : dado.disciplina === 'Geografia'
                        ? 'bg-orange-500'
                        : 'bg-purple-600'
                }`}
              >
                <h3 className="pl-4 pt-4">{dado.disciplina}</h3>
                <span className="pl-4">{dado.criadoEm}</span>
                <div className="pl-4 h-fit w-full bg-black bg-opacity-50">
                  <p className="text-white">Nota: {dado.nota}</p>
                </div>
              </div>
              <ButtonDeleteNote />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

// Exportando o componente Table como padrão
export default Table;
