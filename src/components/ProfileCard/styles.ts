import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Theme from '../Theme';

export const Wrapper = styled.div`
  border-radius: 1.5rem;
  margin: 2rem auto;
  width: 100%;
  height: auto;
  max-width: 1050px;
  background-color: ${Theme.colorPalette.white};

  .profile--heading {
    padding: 2rem;
  }

  .user--profile {
    border-bottom: 2px solid ${Theme.colorPalette.lightGrey};
  }

  .user--profile_name {
    padding: 2rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      /* height: 50rem; */
    }
  }

  .user--profile_address {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    padding: 1rem 0;

    @media (min-width: 768px) {
      margin-top: 0;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  .img {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
  }

  .about--section {
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  .about {
    /* flex: 1.3; */

    @media (min-width: 768px) {
      flex: 0.9;
    }
  }

  .likes {
    /* align-self: center; */
    /* justify-self: flex-start; */
    /* flex: 1; */
    @media (min-width: 768px) {
      flex: 1;
    }
  }
  .dislikes {
    /* flex: 0.9; */
    @media (min-width: 768px) {
      flex: 1.2;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  /* justify-content: flex-start; */
  align-items: flex-start;
  > * {
    margin-right: 1.5rem;
    font-size: 1.5rem;
  }
`;

export const SummaryButton = styled(Link)`
  padding: 2rem 3rem;
  background-color: ${Theme.colorPalette.twitterBlue};
  border-radius: 0.7rem;
  font-size: 1.8rem;
  color: ${Theme.colorPalette.lightGrey};
`;

export const SummaryButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

export const HeadingSecondary = styled.h2`
  font-size: 2rem;
  font-weight: ${Theme.fontWeight.bold};
`;
export const HeadingTertiary = styled.h4`
  font-size: 1.9rem;
  font-weight: ${Theme.fontWeight.bold};
`;

export const TextMain = styled.p`
  font-size: 1.5rem;
`;
