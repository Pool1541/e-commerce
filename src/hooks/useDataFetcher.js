import { useEffect, useState } from 'react';

export default function useDataFetcher({ fetcherFn, args = {}, dependencies = [] }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const abortController = new AbortController();
    args.options = {
      ...args.options,
      signal: abortController.signal,
    };
    (async () => {
      try {
        const data = await fetcherFn({ ...args });
        setData(data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();

    return () => abortController.abort();
  }, [...dependencies]);

  return { data, loading, error };
}
