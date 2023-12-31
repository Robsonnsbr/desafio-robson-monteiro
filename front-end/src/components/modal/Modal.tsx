'use client';
import React, { useState } from 'react';
import { Resultado } from 'src/types/Types';
import { formatarBimestre } from 'src/utils';

type PropsButton = {
  dado: Resultado;
  modalOpen: boolean;
  onClick: (estado: boolean) => void;
};

function Modal({ dado, modalOpen, onClick }: PropsButton) {
  const [selectedDisciplina, setSelectedDisciplina] = useState<string | null>(
    null
  );
  const [nota, setNota] = useState<number>(dado.nota);
  console.log(nota);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (/^(0(\.\d{0,2})?|10(\.0{0,2})?|[1-9](\.\d{0,2})?)$/.test(inputValue)) {
      setNota(parseFloat(inputValue));
      // TODO: Parei aqui...
    }
  };

  const handleButtonClick = (disciplina: string) => {
    setSelectedDisciplina(disciplina);
  };

  const id = dado._id;
  const bimestre = dado.bimestre;
  return (
    <div className="fixed bg-black bg-opacity-50 top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="bg-black min-w-[90%] sm:min-w-[50%] h-96 flex flex-col justify-center items-center relative">
        <button className="self-start" onClick={() => onClick(!modalOpen)}>
          X
        </button>
        <div className="text-black flex items-center">
          <label htmlFor="disciplinaButtons" className="text-white mr-2">
            Bimestre {formatarBimestre(bimestre)}
          </label>

          <button
            onClick={() => handleButtonClick('Biologia')}
            className={`mr-2 ${
              selectedDisciplina === 'Biologia'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300'
            }`}
          >
            Biologia
          </button>

          <button
            onClick={() => handleButtonClick('Artes')}
            className={`mr-2 ${
              selectedDisciplina === 'Artes'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300'
            }`}
          >
            Artes
          </button>

          <button
            onClick={() => handleButtonClick('Geografia')}
            className={`mr-2 ${
              selectedDisciplina === 'Geografia'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300'
            }`}
          >
            Geografia
          </button>

          <button
            onClick={() => handleButtonClick('Sociologia')}
            className={`mr-2 ${
              selectedDisciplina === 'Sociologia'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300'
            }`}
          >
            Sociologia
          </button>
          <input type="text" value={nota} onChange={handleChange} />
        </div>
        <span>{selectedDisciplina}</span>
        <h2>{id}</h2>
        <span className="text-black z-10">Modal</span>
      </div>
    </div>
  );
}

export default Modal;
