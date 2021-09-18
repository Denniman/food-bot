import React from 'react';
import Header from '../../components/Header';
import ProfileCard from '../../components/ProfileCard';

import { Container, HeadingPrimary } from './styles';

const Profile: React.FC = () => {
  return (
    <>
      <Header>
        <HeadingPrimary>Welcome Back!</HeadingPrimary>
      </Header>
      <Container>
        <ProfileCard />
      </Container>
    </>
  );
};

export default Profile;
