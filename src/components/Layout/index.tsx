import React, { ReactNode } from 'react';

import { Container } from './styels';

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
