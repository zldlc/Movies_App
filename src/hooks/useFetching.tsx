import { useState } from 'react';

import axios from 'axios';

type useFetchingReturn = [fetching: (signal?: AbortSignal) => Promise<void>, isLoading: boolean, isError: boolean];

export const useFetching = (callback: (signal?: AbortSignal) => Promise<void>): useFetchingReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  async function fetching(signal?: AbortSignal): Promise<void> {
    try {
      setIsLoading(true);
      await callback(signal);
      setIsLoading(false);
    } catch (e) {
      if (axios.isCancel(e)) {
      } else {
        setIsError(true);
        setIsLoading(false);
      }
    }
  }

  return [fetching, isLoading, isError];
};
