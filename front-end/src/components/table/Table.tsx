'use client';
import React, { useState, useEffect } from 'react';
import { getDados } from '@/app/api/dados/route';
import { Resultado } from '@/types/Types';
import RowTable from './RowTable';

function Table() {
  const [resultados, setResultados] = useState<Resultado[]>([]);
  const [atualizarA, setAtualizarA] = useState(false);
  const [atualizarF, setAtualizarF] = useState(false);

  const atualizarAvo = () => {
    setAtualizarA(!atualizarA);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Resultado[] = await getDados();
        setResultados(data);
        setAtualizarF(!atualizarF);
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
  }, [atualizarA]);

  return (
    <div className="items-center h-full pt-20 min-w-80">
      {resultados.map((resultado: Resultado) => (
        <RowTable
          key={resultado._id}
          resultado={resultado}
          atualizarAvo={atualizarAvo}
          atualizarF={atualizarF}
        />
      ))}
    </div>
  );
}

export default Table;
