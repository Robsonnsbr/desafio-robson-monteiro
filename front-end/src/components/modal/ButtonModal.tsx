'use client';

import Image from 'next/image';
import vectorIcon from '@/assets/icons/vector.svg';

const sendNota = () => {
  console.log('Send nota');
};

function ButtonModal() {
  return (
    <button
      className="bg-customYellow px-4 py-1 rounded-xl h-fit"
      onClick={() => sendNota()}
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

export default ButtonModal;
