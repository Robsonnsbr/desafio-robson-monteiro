'use client';

import React, { useEffect } from 'react';

interface IPropsError {
  error: Error & { digest: string };
  reset: () => void;
}

export default function Error({ error, reset }: IPropsError) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex-col mt-28 m-auto">
      <h2 className="p-5">
        Desculpe, algo deu errado. Por favor, tente novamente mais tarde!
      </h2>
      <p className="p-5">
        Erro:
        <pre className="text-red-500 p-2">{error.message}</pre>
      </p>
      <button
        className=" bg-customYellow px-4 py-1 rounded-xl h-fit text-black"
        onClick={reset}
      >
        Tentar Novamente!
      </button>
    </div>
  );
}
