import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Main, Subtitle } from '../../components/elements';
import { PUBLIC_ROUTES } from '../../config';
import errorImage from '../../assets/images/internal-server-error.png';
import Header from '../../components/header/Header';

export default function Error() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Main>
        <Container
          style={{
            marginTop: '10rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          {/* <Subtitle style={{ textAlign: 'center', fontSize: '3rem' }}>
            Oops hubo un error, inténtalo más tarde.
          </Subtitle> */}
          <Box overflow='hidden' width='40rem' height='40rem'>
            <img src={errorImage} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          </Box>

          <Button onClick={() => navigate(PUBLIC_ROUTES.HOME)}>Regresar</Button>
        </Container>
      </Main>
    </>
  );
}
