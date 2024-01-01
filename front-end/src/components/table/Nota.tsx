'use client';

import React, { useEffect, useState } from 'react';

interface NotaProps {
  nota: number;
}

function Nota({ nota }: NotaProps) {
  const [color, setColor] = useState('text-white');
  const [corStroke, setCorStroke] = useState('#fff');

  const [pathRef1, pathRef2, pathRef3, pathRef4] = Array.from(
    { length: 4 },
    () => React.createRef<SVGPathElement>()
  );

  useEffect(() => {
    const changeColorNota = (nota: number) => {
      if (nota < 6) {
        setColor('text-customRed');
        setCorStroke('#FF5964');
      }
      if (nota >= 6) {
        setColor('text-customYellow');
        setCorStroke('#E9FF1A');
      }
      if (nota >= 8) {
        setColor('text-customGreen');
        setCorStroke('#05FF00');
      }

      pathRef1.current?.setAttribute('stroke', corStroke);
      pathRef2.current?.setAttribute('stroke', corStroke);
      pathRef3.current?.setAttribute('stroke', corStroke);
      pathRef4.current?.setAttribute('stroke', corStroke);
    };
    changeColorNota(nota);
  }, [corStroke, nota, pathRef1, pathRef2, pathRef3, pathRef4]);

  return (
    <div className="pl-4 h-fit w-full bg-black bg-opacity-50 flex gap-2 mb-4 p-1">
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.98292 9.05302V14.6311"
          ref={pathRef1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.7302 6.38338V14.6316"
          ref={pathRef2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.416 12.0007V14.6314"
          ref={pathRef3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.71765 10.5329C2.71765 4.44785 4.72124 2.4189 10.7303 2.4189C16.7393 2.4189 18.7429 4.44785 18.7429 10.5329C18.7429 16.618 16.7393 18.647 10.7303 18.647C4.72124 18.647 2.71765 16.618 2.71765 10.5329Z"
          ref={pathRef4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className={color}>Nota: {nota}</span>
    </div>
  );
}

export default Nota;
