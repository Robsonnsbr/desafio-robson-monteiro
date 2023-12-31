'use client';
import trashIcon from '@/assets/icons/trash.svg';
import Image from 'next/image';
import { updateDados } from 'src/app/api/dados/route';
import { Resultado } from 'src/types/Types';

type PropsButton = {
  dado: Resultado;
  deleteView: (id: string) => void;
};

function ButtonModal({ dado, deleteView }: PropsButton) {
  return (
    <button onClick={() => [updateDados(dado), deleteView(dado._id)]}>
      <Image src={trashIcon} alt={'icon lixeira'} />
    </button>
  );
}

export default ButtonModal;
