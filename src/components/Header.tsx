// Header.tsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #3f51b5;
  color: white;
  padding: 20px;
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  margin-top: 0;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Robot Movement Simulator</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
