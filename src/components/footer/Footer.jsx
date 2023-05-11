import { Link } from 'react-router-dom';
import { Container } from '../elements/Container.styled';
import { StyledFooter, FooterGrid, FooterList } from './Footer.styled';
import { InstagramIcon, GeoIcon, FacebookIcon, PhoneIcon } from '../../assets/icons';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FooterGrid>
          <FooterList>
            <h3>ShokerStore</h3>
            <ul>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cum optio nihil harum
                  qui a quos temporibus reprehenderit voluptatum, architecto sint quod animi
                  repellat hic quia labore debitis repellendus rerum eius, natus facere. Laborum
                  temporibus minus numquam aliquam velit adipisci nihil officiis nobis! Voluptatum
                  quisquam molestias dignissimos aut, excepturi veniam.
                </p>
              </li>
            </ul>
          </FooterList>
          <FooterList>
            <h3>Keep in touch</h3>
            <ul>
              <Link to={'/'}>
                <li>
                  <GeoIcon />
                  <span>
                    589 East new York Ave. <br />
                    Brooklyn, NY 11225
                  </span>
                </li>
              </Link>
              <Link to={'/'}>
                <li>
                  <PhoneIcon /> <span>(718)363-1300</span>
                </li>
              </Link>
            </ul>
          </FooterList>
          <FooterList>
            <h3>Social Media</h3>
            <ul>
              <Link to={'/'}>
                <li>
                  <FacebookIcon />
                  <span>Follow us in Facebook</span>
                </li>
              </Link>
              <Link to={'/'}>
                <li>
                  <InstagramIcon />
                  <span>Follow us in Instagram</span>
                </li>
              </Link>
            </ul>
          </FooterList>
        </FooterGrid>
      </Container>
    </StyledFooter>
  );
}
