import { Button } from '../../../../components/elements/Button.styled';
import useFilterSidebar from '../../hooks/useFilterSidebar';

export default function Sort() {
  const { toggleFilterSidebar } = useFilterSidebar();
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        alignItems: 'center',
        height: '80px',
      }}>
      <Button onClick={toggleFilterSidebar}>Filtrar</Button>
      <Button>Ordenar</Button>
    </div>
  );
}
