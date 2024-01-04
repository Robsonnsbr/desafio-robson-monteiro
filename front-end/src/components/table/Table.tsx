'use client';
import React, { useState, useEffect } from 'react';
import { getDados } from '@/app/api/dados/route';
import { Resultado } from '@/types/Types';
import RowTable from './RowTable';

function Table() {
  const [resultados, setResultados] = useState<Resultado[]>([]);
  const [atualizarAvo, setAtualizarAvo] = useState(false);
  const [atualizarFilho, setAtualizarFilho] = useState(false);

  const handleAtualizarAvo = () => {
    setAtualizarAvo(!atualizarAvo);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Resultado[] = await getDados();
        setResultados(data);
        setAtualizarFilho(!atualizarFilho);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    const executeEffect = async () => {
      await fetchData();
      setTimeout(async () => {
        try {
          await fetchData();
        } catch (error) {
          console.error('Erro ao buscar dados novamente:', error);
        }
      }, 200);
    };

    executeEffect();
  }, [atualizarAvo]);

  return (
    <div className="items-center h-full pt-20 min-w-80">
      {resultados.length > 0 ? (
        resultados.map((resultado: Resultado) => (
          <RowTable
            key={resultado._id}
            resultado={resultado}
            handleAtualizarAvo={handleAtualizarAvo}
            atualizarFilho={atualizarFilho}
          />
        ))
      ) : (
        <div className="p-4 bg-gray-200">
          <p className="text-lg text-red-500">
            Desculpe, não há dados para mostrar no momento. 😔
          </p>
        </div>
      )}
    </div>
  );
}

export default Table;
