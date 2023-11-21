import { NavLink } from 'react-router-dom';
import { LinkWrapper, SidebarNav, StyledSidebar } from './Sidebar.styled';
import { ACCOUNT_ROUTES } from '../../../../config';
import { BillingIcon, FingerPrintIcon, PackageIcon, UserIcon } from '../../../../assets/icons';

export default function Sidebar() {
  return (
    <StyledSidebar>
      <SidebarNav>
        <LinkWrapper>
          <NavLink to={`${ACCOUNT_ROUTES.PROFILE}`}>
            <UserIcon />
            Perfil
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink to={`${ACCOUNT_ROUTES.SECURITY}`}>
            <FingerPrintIcon />
            Seguridad
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink to={`${ACCOUNT_ROUTES.BILLING}`}>
            <BillingIcon />
            Facturación
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink to={`${ACCOUNT_ROUTES.ORDERS}`}>
            <PackageIcon />
            Pedidos
          </NavLink>
        </LinkWrapper>
      </SidebarNav>
    </StyledSidebar>
  );
}
