'use client';

import Image from 'next/image';
import vectorIcon from '@/assets/icons/vector.svg';
import { Resultado } from 'src/types/Types';

interface ButtonOpenModalProps {
  modalOpen: boolean;
  dado?: Resultado | null;
  onClick: (estado: boolean) => void;
}

function ButtonOpenModal({ modalOpen, dado, onClick }: ButtonOpenModalProps) {
  // if (dado) {
  //   console.log(dado);
  // }
  return (
    <button
      className="bg-customYellow px-4 py-1 rounded-xl h-fit"
      onClick={() => onClick(!modalOpen)}
    >
      <div className="flex gap-2">
        <span className="hidden sm:flex items-center text-black font-semibold">
          Lançar Nota
        </span>
        <Image src={vectorIcon} alt="icon vector" />
      </div>
    </button>
  );
}

export default ButtonOpenModal;
