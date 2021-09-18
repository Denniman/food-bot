import styled from 'styled-components';
import Theme from '../../components/Theme';

export const Container = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${Theme.colorPalette.greyBg};
`;

export const HeadingPrimary = styled.h1`
  font-size: 2.5rem;
  font-weight: ${Theme.fontWeight.bold};
`;
