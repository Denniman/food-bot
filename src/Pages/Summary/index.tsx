import React from 'react';
import { BackIcon } from '../../assets/icons';
import { Container, NavLinkComp, HeadingPrimary, Header } from './styles';

// const Layout = lazy(() => import('../../components/Loading'));

const Summary: React.FC = () => {
  return (
    <Container>
      <Header>
        <NavLinkComp to="/">
          <BackIcon />
          Back to Profile
        </NavLinkComp>
        <HeadingPrimary>Summary Page</HeadingPrimary>
      </Header>
    </Container>
  );
};

export default Summary;
