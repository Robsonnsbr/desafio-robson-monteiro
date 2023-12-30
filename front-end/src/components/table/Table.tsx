'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import graphicIcon from '@/assets/icons/Graphic.svg';

import { Resultado } from 'src/types/Types';

import ButtonDeleteNote from './ButtonDeleteNote';
import ButtonModal from '../modal/ButtonModal';
import { fetchResultados } from '@/app/api/dados/route';
import formatarData from 'src/utils/date-utils';

function Table() {
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchResultados();
        setResultados(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
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
                  <span className="pl-4">{formatarData(dado.createdAt)}</span>
                </div>
                <div className="pl-4 h-fit w-full bg-black bg-opacity-50 flex gap-2 mb-4 p-1">
                  <Image
                    src={graphicIcon}
                    alt="icon gráfico"
                    className="w-5 h-5 self-center"
                  />
                  <p className=" text-white">Nota: {dado.nota}</p>
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

export default Table;
