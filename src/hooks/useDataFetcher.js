import { useEffect, useState } from 'react';
import { errorHandler } from '../errors/errorHandler';
import useErrorHandler from './useErrorHandler';

export default function useDataFetcher({
  fetcherFn,
  args = {},
  dependencies = [],
  select,
  canFetch = true,
}) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { manageError } = useErrorHandler();

  useEffect(() => {
    if (!canFetch) return;

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

        if (!abortController.signal.aborted) setData(data);
      } catch (error) {
        if (!abortController.signal.aborted) {
          console.log(error);
          manageError(error);
          errorHandler(error);
          setError(error.message);
        }
      } finally {
        if (!abortController.signal.aborted) setLoading(false);
      }
    })();

    return () => abortController.abort();
  }, [...dependencies, canFetch]);

  return { data, loading, error };
}
