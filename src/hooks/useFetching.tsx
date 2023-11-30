import { useState } from 'react';

type useFetchingReturn = [fetching: () => Promise<void>, isLoading: boolean, isError: boolean];

export const useFetching = (callback: () => Promise<void>): useFetchingReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  async function fetching(): Promise<void> {
    try {
      setIsLoading(true);
      await callback();
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return [fetching, isLoading, isError];
};
