# Hooks personalizados

En esta carpeta se almacena los hooks personalizados que se usarán en cualquier parte de la aplicación, el fin de estos hooks es mantener un orden en el código, extraer la lógica de los componente, de tal forma que solo se dediquen a cumplir una función y tener la posibilidad de reutilizarlos en otros componentes. Por ejemplo:

```javascript
// hooks/UseFetch.js

function UseFetch() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      ...
    }

    fetchData();
  }, [data]);

  return { data, loading, error }
}

```
