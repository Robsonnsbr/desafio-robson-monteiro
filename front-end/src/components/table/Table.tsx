'use client';
// Importando React, useState e useEffect do React
import React, { useState, useEffect } from 'react';

// Importando os tipos necessários
import { Resultado } from 'src/types/Types';

// Importando os dados do arquivo JSON
import resultado from '@/dados/db.json';
import ButtonDeleteNote from './ButtonDeleteNote';
import ButtonModal from '../modal/ButtonModal';

function Table() {
  const [dados, setDados] = useState<{ resultado: Resultado[] }>({
    resultado: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDados(resultado);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ul className="grid gap-4 items-center h-full pt-28">
      {dados.resultado.map((dado: Resultado) => (
        <li key={dado.id}>
          <div>
            <div className="flex justify-between mb-7">
              <h1>{dado.bimestre}</h1>
              <ButtonModal />
            </div>
            <div className="flex items-start gap-2">
              <div
                className={`p-4 ${
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
