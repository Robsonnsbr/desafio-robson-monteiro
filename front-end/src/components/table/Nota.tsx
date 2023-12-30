'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import graphicIcon from '@/assets/icons/Graphic.svg';

interface NotaProps {
  nota: number;
}
// TODO: Corrigir cor icon SVG
function Nota({ nota }: NotaProps) {
  const [color, setColor] = useState('text-white');

  useEffect(() => {
    const changeColorNota = (nota: number) => {
      if (nota < 6) {
        setColor('text-red-600');
      }
      if (nota >= 6) {
        setColor('text-yellow-400');
      }
      if (nota >= 8) {
        setColor('text-green-400');
      }
    };
    changeColorNota(nota);
  }, [nota]);

  return (
    <div className="pl-4 h-fit w-full bg-black bg-opacity-50 flex gap-2 mb-4 p-1">
      <Image
        src={graphicIcon}
        alt="icon gráfico"
        className="w-5 h-5 self-center"
      />
      <span className={color}>Nota: {nota}</span>
    </div>
  );
}

export default Nota;
