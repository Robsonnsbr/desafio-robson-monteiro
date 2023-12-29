'use client';

const deleteNote = () => {
  console.log('Deletei a nota!');
};

function ButtonModal() {
  return (
    <button onClick={() => deleteNote()}>
      <span className="text-white">B.DEL</span>
    </button>
  );
}

export default ButtonModal;
