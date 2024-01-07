import React from 'react';
import { Disciplina, Resultado } from 'src/types/Types';
import { updateDados } from 'src/app/api/dados/route';

export const handleInputChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setFunction: React.Dispatch<React.SetStateAction<number | null>>
) => {
  const inputValue: string = event.target.value;

  if (inputValue === '10') {
    setFunction(parseFloat(inputValue));
  } else {
    const inputFormat = inputValue.slice(0, 1) + '.' + inputValue.slice(1);
    setFunction(parseFloat(inputFormat));
  }
};

export const handleButtonClick = (
  disciplina: Disciplina,
  setFunction: React.Dispatch<React.SetStateAction<Disciplina>>
) => {
  setFunction(disciplina);
};

export const canSendData = (dadosBimestre?: Resultado) => {
  if (dadosBimestre) {
    return dadosBimestre.nota === null && dadosBimestre.disciplina === null;
  }
};

export const sendNewData = (
  newGrade: number,
  selectedDisciplina: Disciplina,
  handleAtualizarAvo: () => void,
  dadosBimestre: Resultado
) => {
  if (canSendData(dadosBimestre)) {
    const newData: Resultado = {
      _id: dadosBimestre._id,
      bimestre: dadosBimestre.bimestre,
      createdAt: dadosBimestre.createdAt,
      disciplina: selectedDisciplina,
      nota: newGrade || 0,
      updatedAt: dadosBimestre.updatedAt
    };

    updateDados(newData);
    handleAtualizarAvo();
  } else {
    console.warn(
      'Não é possível enviar novos dados. Nota ou disciplina não são nulos.'
    );
  }
};
