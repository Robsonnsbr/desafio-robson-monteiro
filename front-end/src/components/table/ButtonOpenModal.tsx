'use client';

import Image from 'next/image';
import vectorIcon from '@/assets/icons/vector.svg';

interface ButtonOpenModalProps {
  openModal: () => void;
}

function ButtonOpenModal({ openModal }: ButtonOpenModalProps) {
  return (
    <button
      className="bg-customYellow px-4 py-1 rounded-xl h-fit"
      onClick={openModal}
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
