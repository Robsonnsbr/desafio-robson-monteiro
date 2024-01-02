'use client';
import React, { useState, useEffect } from 'react';
import { getDados } from '@/app/api/dados/route';
import { Resultado } from '@/types/Types';
import RowTable from './RowTable';

function Table() {
  const [resultados, setResultados] = useState<Resultado[]>([]);
  const [atualizar, setAtualizar] = useState(Boolean);

  const atualizarPai = () => {
    setAtualizar(!atualizar);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Resultado[] = await getDados();
        setResultados(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [atualizar]);

  return (
    <div className="items-center h-full pt-20 min-w-80">
      {resultados.map((resultado: Resultado) => (
        <RowTable
          key={resultado._id}
          resultado={resultado}
          atualizarPai={atualizarPai}
        />
      ))}
    </div>
  );
}

export default Table;
