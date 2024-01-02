'use client';
import trashIcon from '@/assets/icons/trash.svg';
import Image from 'next/image';
import { updateDados } from 'src/app/api/dados/route';
import { Resultado } from 'src/types/Types';

type PropsButton = {
  dadosBimestre: Resultado;
  deleteView: (id: string) => void;
};

function ButtonModal({ dadosBimestre, deleteView }: PropsButton) {
  const dadosAtualizado = {
    _id: dadosBimestre._id
  };

  return (
    <button
      onClick={() => [
        updateDados(dadosAtualizado),
        deleteView(dadosBimestre._id)
      ]}
    >
      <Image src={trashIcon} alt={'icon lixeira'} />
    </button>
  );
}

export default ButtonModal;
