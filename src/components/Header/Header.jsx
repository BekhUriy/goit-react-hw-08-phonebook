import React from 'react';
import styled from 'styled-components';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { useAuth } from 'hooks/useAuth';

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderContainer>
      <div>
        <span>Phonebook</span>
      </div>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderContainer>
  );
};

export default Header;
