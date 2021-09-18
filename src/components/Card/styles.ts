import styled from 'styled-components';
import Theme from '../Theme';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  /* padding: 0; */

  .profile--divider {
    border-bottom: 2px solid ${Theme.colorPalette.lightGrey};
  }

  .profile--heading_wrapper {
    padding: 2rem;
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
`;

export const HeadingSecondary = styled.h2`
  font-size: 1.8rem;
  font-weight: ${Theme.fontWeight.bold};
`;
export const HeadingTertiary = styled.h4`
  font-size: 1.5rem;
  font-weight: ${Theme.fontWeight.bold};
`;

export const TextMain = styled.p`
  font-size: 1.8rem;
`;

export const List = styled.li`
  list-style: none;
  display: flex;
  /* justify-content: flex-start; */
  align-items: flex-start;
  > * {
    margin-right: 1.5rem;
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
