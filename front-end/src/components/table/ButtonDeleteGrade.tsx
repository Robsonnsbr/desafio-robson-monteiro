'use client';
import trashIcon from '@/assets/icons/trash.svg';
import Image from 'next/image';
import { updateDadosDelete } from 'src/app/api/dados/route';
import { Resultado } from 'src/types/Types';

type ResultadoId = Pick<Resultado, '_id'>;

type PropsButton = {
  dadosBimestre: Resultado;
  deleteView: (id: string) => void;
};

function ButtonDeleteGrade({ dadosBimestre, deleteView }: PropsButton) {
  const dadosAtualizadoDelete: ResultadoId = {
    _id: dadosBimestre._id
  };

  return (
    <button
      onClick={() => [
        updateDadosDelete(dadosAtualizadoDelete),
        deleteView(dadosBimestre._id)
      ]}
    >
      <Image src={trashIcon} alt={'icon lixeira'} />
    </button>
  );
}

export default ButtonDeleteGrade;
