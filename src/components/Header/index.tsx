import React, { ReactNode } from 'react';

import { Wrapper } from './styles';

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Header;
