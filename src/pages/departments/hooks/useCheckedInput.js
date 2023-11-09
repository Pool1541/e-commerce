import { useSearchParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function useCheckedInput({ title, label, handleOpen }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialValue = searchParams.get(title)?.includes(label);
  const ref = useRef();

  function handleChange() {
    const isChecked = ref.current.checked;

    if (isChecked) {
      let params = searchParams.get(title);
      params = params ? params.split(',').concat(label).join(',') : label;

      searchParams.set(title, params);
    } else {
      let params = searchParams.get(title);
      params = params
        .split(',')
        .filter((param) => param !== label)
        .join(',');

      params ? searchParams.set(title, params) : searchParams.delete(title);
    }

    searchParams.delete('page');
    searchParams.delete('sort');
    setSearchParams(searchParams);
  }

  useEffect(() => {
    const params = searchParams.get(title);

    params && params.includes(label) ? (ref.current.checked = true) : (ref.current.checked = false);
    ref.current.checked && handleOpen();
  }, [searchParams]);

  return {
    initialValue,
    ref,
    handleChange,
  };
}
