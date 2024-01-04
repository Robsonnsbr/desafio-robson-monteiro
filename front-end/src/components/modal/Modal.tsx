'use client';

import React, { useState } from 'react';
import { formatarBimestre } from 'src/utils';
import { Resultado, Disciplina } from 'src/types/Types';

import {
  handleInputChange,
  handleButtonClick,
  sendNewData,
  canSendData
} from './modalFunctions';

type PropsButton = {
  dadosBimestre: Resultado;
  openModal: () => void;
  handleAtualizarAvo: () => void;
};

function Modal({ dadosBimestre, openModal, handleAtualizarAvo }: PropsButton) {
  const [selectedDisciplina, setSelectedDisciplina] = useState<Disciplina>(
    Disciplina.BIOLOGIA
  );
  const [newGrade, setNewGrade] = useState<number | null>(dadosBimestre.nota);
  const [isCanSend, setIsCanSend] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event, setNewGrade);
  };

  const handleNonShipping = () => {
    const isCanSend = canSendData(dadosBimestre);

    if (isCanSend) {
      setIsCanSend(true);
      openModal();
    } else {
      setIsCanSend(false);
      setTimeout(() => {
        setIsCanSend(true);
        openModal();
      }, 4000);
    }
  };

  const bimestre = dadosBimestre.bimestre;

  return (
    <div
      className={`fixed bg-black bg-opacity-40 top-0 left-0 w-full h-full flex justify-center items-center z-20`}
    >
      <ul
        className={`bg-customBlack min-w-[90%] sm:min-w-[40%] min-h-96 flex flex-col items-center relative text-white p-8 z-20 ${
          !isCanSend ? 'border-2 border-red-800' : ''
        }`}
      >
        <li className="flex flex-row justify-between w-full pb-8 z-20">
          <h1 className="text-2xl">Bimestre {formatarBimestre(bimestre)}</h1>
          <button className="self-start" onClick={openModal}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white hover:fill-red-700"
            >
              <path d="M19.7076 18.2925C19.8005 18.3854 19.8742 18.4957 19.9245 18.6171C19.9747 18.7385 20.0006 18.8686 20.0006 19C20.0006 19.1314 19.9747 19.2615 19.9245 19.3829C19.8742 19.5043 19.8005 19.6146 19.7076 19.7075C19.6147 19.8004 19.5044 19.8741 19.383 19.9244C19.2616 19.9747 19.1315 20.0006 19.0001 20.0006C18.8687 20.0006 18.7386 19.9747 18.6172 19.9244C18.4958 19.8741 18.3855 19.8004 18.2926 19.7075L10.0001 11.4138L1.70757 19.7075C1.51993 19.8951 1.26543 20.0006 1.00007 20.0006C0.734704 20.0006 0.480208 19.8951 0.292568 19.7075C0.104927 19.5199 -0.000488276 19.2654 -0.000488281 19C-0.000488286 18.7346 0.104927 18.4801 0.292568 18.2925L8.58632 10L0.292568 1.70751C0.104927 1.51987 -0.000488281 1.26537 -0.000488281 1.00001C-0.000488281 0.734643 0.104927 0.480147 0.292568 0.292507C0.480208 0.104866 0.734704 -0.000549316 1.00007 -0.000549316C1.26543 -0.000549316 1.51993 0.104866 1.70757 0.292507L10.0001 8.58626L18.2926 0.292507C18.4802 0.104866 18.7347 -0.000549322 19.0001 -0.000549316C19.2654 -0.000549311 19.5199 0.104866 19.7076 0.292507C19.8952 0.480147 20.0006 0.734643 20.0006 1.00001C20.0006 1.26537 19.8952 1.51987 19.7076 1.70751L11.4138 10L19.7076 18.2925Z" />
            </svg>
          </button>
        </li>
        <li className="text-left w-full text-lg">
          <h3 className="pb-4">Disciplina</h3>
        </li>
        <li className="w-full">
          <ul className="min-w-72 grid grid-cols-2 sm:flex gap-4 justify-between">
            <li>
              <button
                onClick={() =>
                  handleButtonClick(Disciplina.BIOLOGIA, setSelectedDisciplina)
                }
                className={`w-32 h-14 rounded-3xl bg-customPink  ${
                  selectedDisciplina === 'Biologia'
                    ? 'bg-opacity-100'
                    : 'bg-opacity-30'
                }`}
              >
                {Disciplina.BIOLOGIA}
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  handleButtonClick(Disciplina.ARTES, setSelectedDisciplina)
                }
                className={`w-32 h-14 rounded-3xl bg-customBlue ${
                  selectedDisciplina === Disciplina.ARTES
                    ? 'bg-opacity-100'
                    : 'bg-opacity-30'
                }`}
              >
                Artes
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  handleButtonClick(Disciplina.GEOGRAFIA, setSelectedDisciplina)
                }
                className={`w-32 h-14 rounded-3xl bg-customBrown ${
                  selectedDisciplina === Disciplina.GEOGRAFIA
                    ? 'bg-opacity-100'
                    : 'bg-opacity-30'
                }`}
              >
                {Disciplina.GEOGRAFIA}
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  handleButtonClick(
                    Disciplina.SOCIOLOGIA,
                    setSelectedDisciplina
                  )
                }
                className={`w-32 h-14 rounded-3xl bg-customPurple ${
                  selectedDisciplina === Disciplina.SOCIOLOGIA
                    ? 'bg-opacity-100'
                    : 'bg-opacity-30'
                }`}
              >
                {Disciplina.SOCIOLOGIA}
              </button>
            </li>
          </ul>
        </li>
        <li className="grid grid-cols-1 text-left items-start w-full">
          <label htmlFor="nota" className="w-fit py-2 text-base">
            Nota
          </label>
          <div className="flex justify-between max-w-full">
            <input
              id="nota"
              name="nota"
              type="text"
              className="bg-customBlack w-24 border-2 border-gray-700 rounded-xl py-3  px-4 text-center"
              maxLength={2}
              placeholder="0"
              value={newGrade || 0}
              onChange={handleChange}
            />
            <span
              className={`p-4 text-customRed text-xs max-w-36 sm:max-w-fit ${
                isCanSend
                  ? 'opacity-0 transition-opacity duration-2000 ease-in-out'
                  : 'opacity-100'
              }`}
            >
              Já existe uma disciplina no Bimestre!
            </span>
          </div>
        </li>
        <li className="flex justify-end w-full pt-4">
          <button
            className={`bg-customYellow text-black w-32 h-12 rounded-xl ${
              !isCanSend && 'opacity-50'
            }`}
            disabled={!isCanSend}
            onClick={() => [
              sendNewData(
                newGrade || 0,
                selectedDisciplina,
                handleAtualizarAvo,
                dadosBimestre
              ),
              !isCanSend,
              handleNonShipping()
            ]}
          >
            Confirmar
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Modal;
