import React, { lazy } from 'react';

import {
  Wrapper,
  List,
  SummaryButtonWrapper,
  SummaryButton,
  HeadingTertiary,
  TextMain,
} from './styles';

const randomNumber = Math.floor(Math.random() * 100);

const randomeImg = `https://randomuser.me/api/portraits/men/${randomNumber}.jpg`;

const Layout = lazy(() => import('../Layout'));

interface listProps {
  name: string;
}

export const DisplayList: React.FC<listProps> = ({ name }) => {
  return <li>{name}</li>;
};

interface ProfileCardsProps {
  name: string;
  id: string;
  address: string;
  phone: string;
  about: string;
  likes: string[];
  dislikes: string[];
}

const ProfileCard: React.FC<ProfileCardsProps> = ({
  id,
  about,
  likes,
  dislikes,
  address,
  phone,
  name,
}) => {
  // const [error, setError] = useState(nulfalse)

  return (
    <Layout>
      <Wrapper>
        <div className="user--profile">
          <div className="profile--heading">
            <h1>Customer Profile</h1>
          </div>
          <div className="user--profile_name">
            <img src={randomeImg} alt="user" className="img" />

            <div className="name">
              <div className="user--profile_address">
                <HeadingTertiary>Customer ID</HeadingTertiary>
                <TextMain>{id}</TextMain>
              </div>
              <div className="user--profile_address">
                <HeadingTertiary>Name</HeadingTertiary>
                <TextMain>{name}</TextMain>
              </div>
            </div>
            <div className="address">
              <div className="user--profile_address">
                <HeadingTertiary>Phone number:</HeadingTertiary>
                <TextMain>{phone}</TextMain>
              </div>
              <div className="user--profile_address">
                <HeadingTertiary>Address:</HeadingTertiary>
                <TextMain>{address}</TextMain>
              </div>
            </div>
          </div>
        </div>

        <div className="user--profile">
          <div className="about--section">
            <div className="about">
              <HeadingTertiary>About:</HeadingTertiary>
              <TextMain>{about}</TextMain>
            </div>

            <div className="likes">
              <HeadingTertiary>Likes</HeadingTertiary>
              <List>
                {likes.map((item, i) => (
                  <DisplayList key={i} name={item} />
                ))}
              </List>
            </div>

            <div className="dislikes">
              <HeadingTertiary>DisLikes</HeadingTertiary>
              <List>
                {dislikes.map((item, i) => (
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
