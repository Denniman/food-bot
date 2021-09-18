import React from 'react';

import { Container, HeadingTertiary } from './styles';

interface Ierror {
  text: string;
}

const Error: React.FC<Ierror> = ({ text }) => {
  return (
    <Container>
      <HeadingTertiary>{text}</HeadingTertiary>
    </Container>
  );
};

export default Error;
