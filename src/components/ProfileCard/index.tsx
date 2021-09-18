import React, { useState, useEffect, lazy } from 'react';
import axios from 'axios';
import {
  Wrapper,
  List,
  SummaryButtonWrapper,
  SummaryButton,
  HeadingTertiary,
  TextMain,
} from './styles';

import ProfileImg from '../../assets/images/my_passport.jpg';

const Layout = lazy(() => import('../Layout'));

interface listProps {
  name: string;
}

export const DisplayList: React.FC<listProps> = ({ name }) => {
  return <li>{name}</li>;
};

const ProfileCard: React.FC = () => {
  // const [error, setError] = useState(nulfalse)

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
        const { data } = await axios.get(
          'https://indapi.kumba.io/webdev/assignment'
        );

        setUserData(data.user);
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);

  return (
    <Layout>
      <Wrapper>
        <div className="user--profile">
          <div className="profile--heading">
            <h1>Customer Profile</h1>
          </div>
          <div className="user--profile_name">
            <img src={ProfileImg} alt="user" className="img" />

            <div className="name">
              <div className="user--profile_address">
                <HeadingTertiary>Customer ID</HeadingTertiary>
                <TextMain>{userData.id}</TextMain>
              </div>
              <div className="user--profile_address">
                <HeadingTertiary>Name</HeadingTertiary>
                <TextMain>{userData.name}</TextMain>
              </div>
            </div>
            <div className="address">
              <div className="user--profile_address">
                <HeadingTertiary>Phone number:</HeadingTertiary>
                <TextMain>{userData.phone}</TextMain>
              </div>
              <div className="user--profile_address">
                <HeadingTertiary>Address:</HeadingTertiary>
                <TextMain>{userData.address}</TextMain>
              </div>
            </div>
          </div>
        </div>

        <div className="user--profile">
          <div className="about--section">
            <div className="about">
              <HeadingTertiary>About:</HeadingTertiary>
              <TextMain>{userData.about}</TextMain>
            </div>

            <div className="likes">
              <HeadingTertiary>Likes</HeadingTertiary>
              <List>
                {userData.likes.map((item, i) => (
                  <DisplayList key={i} name={item} />
                ))}
              </List>
            </div>

            <div className="dislikes">
              <HeadingTertiary>DisLikes</HeadingTertiary>
              <List>
                {userData.dislikes.map((item, i) => (
                  <DisplayList key={i} name={item} />
                ))}
              </List>
            </div>
          </div>
        </div>

        <div className="user--profile">
          <SummaryButtonWrapper>
            <SummaryButton to="/meal-summary">View Order Summary</SummaryButton>
          </SummaryButtonWrapper>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default ProfileCard;
