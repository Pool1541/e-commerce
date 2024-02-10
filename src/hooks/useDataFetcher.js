import { useEffect, useState } from 'react';
import { errorHandler } from '../errors/errorHandler';
import useErrorHandler from './useErrorHandler';

export default function useDataFetcher({ fetcherFn, args = {}, dependencies = [], select }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { manageError } = useErrorHandler();

  useEffect(() => {
    const abortController = new AbortController();
    args.options = {
      ...args.options,
      signal: abortController.signal,
    };

    (async () => {
      try {
        setLoading(true);
        let data = await fetcherFn({ ...args });
        if (select) {
          data = select(data);
        }
        setData(data);
      } catch (error) {
        console.log(error);
        manageError(error);
        errorHandler(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();

    return () => abortController.abort();
  }, [...dependencies]);

  return { data, loading, error };
}
