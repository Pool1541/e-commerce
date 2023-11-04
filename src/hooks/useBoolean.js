import { useCallback, useState } from 'react';

export default function useBoolean(initialValue = false) {
  const [value, setValue] = useState(!!initialValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const setToggle = useCallback(() => setValue((x) => !x), []);

  return { value, setTrue, setFalse, setToggle };
}
