import React, { ReactNode } from 'react';

import {
  Container,
  HeadingSecondary,
  HeadingTertiary,
  TextMain,
  List,
} from './styles';

interface ICardPorps {
  imgSrc: string;
  id: string;
  name: string;
  children: ReactNode;
  phonenumber: string;
  address: string;
}

const Card: React.FC<ICardPorps> = ({
  imgSrc,
  id,
  address,
  children,
  name,
  phonenumber,
}) => {
  return (
    <Container>
      <div className="profile--divider">
        <div className="profile--heading_wrapper">
          <HeadingSecondary>Customer Profile</HeadingSecondary>
        </div>
        <div className="user--profile_name">
          <img src={imgSrc} alt="user" className="img" />
          <div className="name">
            <div className="user--profile_address">
              <HeadingTertiary>Customer ID:</HeadingTertiary>
              <TextMain>{id}</TextMain>
            </div>
            <div className="user--profile_address">
              <HeadingSecondary>Name:</HeadingSecondary>
              <TextMain>{name}</TextMain>
            </div>
          </div>

          <div className="address">
            <div className="user--profile_address">
              <HeadingSecondary>Phone number:</HeadingSecondary>
              <TextMain>{phonenumber}</TextMain>
            </div>
            <div className="user--profile_address">
              <HeadingSecondary>Address</HeadingSecondary>
              <TextMain>{address}</TextMain>
            </div>
          </div>
        </div>
      </div>

      <div className="user--profile">
        <div className="about--section">
          <div className="about">
            <h2>About:</h2>
            <p>I'm a food Genie helping out customets in my own way</p>
          </div>

          <div className="likes">
            <h2>Likes</h2>
            <List>
              <li>Chicken</li>
              <li>Chicken</li>
              <li>Chicken</li>
            </List>
          </div>

          <div className="dislikes">
            <h2>DisLikes</h2>
            <List>
              <li>Chicken</li>
              <li>Chicken</li>
              <li>Chicken</li>
            </List>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;
