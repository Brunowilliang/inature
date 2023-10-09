'use client'

import { useEffect, useState } from 'react';

const useMediaQuery = (query: string): boolean => {
  // Define um valor inicial para evitar a referência a `window` no lado do servidor
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Só continua se window estiver definido (ou seja, estamos no lado do cliente)
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      setMatches(media.matches);  // Atualiza o estado inicial com o valor correto

      const listener = () => setMatches(media.matches);
      media.addEventListener('change', listener);

      return () => media.removeEventListener('change', listener);
    }
  }, [query]);

  return matches;
};

export default useMediaQuery;
