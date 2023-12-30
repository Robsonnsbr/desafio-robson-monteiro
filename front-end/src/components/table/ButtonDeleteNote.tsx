'use client';
import trashIcon from '@/assets/icons/trash.svg';
import Image from 'next/image';

const deleteNote = () => {
  console.log('Deletei a nota!');
};

function ButtonModal() {
  return (
    <button onClick={() => deleteNote()}>
      <Image src={trashIcon} alt={'icon lixeira'} />
    </button>
  );
}

export default ButtonModal;
