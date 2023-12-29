'use client';
// apenas para testes

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
    <div>
      <h2>Something went wrong! for testing</h2>
      <pre>{error.message}</pre>
      <button onClick={reset}>Try Again</button>
    </div>
  );
}
