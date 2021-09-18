import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ProfileCard from '../../components/ProfileCard';

import { Container, HeadingPrimary } from './styles';

const Home = () => {
  const [userData, setUserData] = useState({
    name: '',
    id: '',
    address: '',
    phone: '',
    about: '',
    likes: [],
    dislikes: [],
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetch(
          'https://indapi.kumba.io/webdev/assignment'
        );

        const data = await response.json();

        setUserData(data.user);
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);
  return (
    <>
      <Header>
        <HeadingPrimary>Welcome Back!</HeadingPrimary>
      </Header>
      <Container>
        <ProfileCard {...userData} />
      </Container>
    </>
  );
};

export default Home;
