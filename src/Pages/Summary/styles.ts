import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Theme from '../../components/Theme';

export const Container = styled.div`
  /* padding: 1.5rem 2rem; */
`;

export const NavLinkComp = styled(Link)`
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  font-weight: ${Theme.fontWeight.bold};
  color: ${Theme.colorPalette.black};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${Theme.colorPalette.white};
  align-items: center;
  width: 100%;
  padding: 1.5rem 2rem;
`;
export const HeadingPrimary = styled.h2`
  font-size: 2rem;
  font-weight: ${Theme.fontWeight.bold};
`;
