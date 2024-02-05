import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
`;

const LinkNav = styled(NavLink)`
  text-decoration: none;
  color: white;
  margin-right: 20px;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #4caf50;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <LinkNav to="/">Home</LinkNav>
      {isLoggedIn && <LinkNav to="/contacts">Contacts</LinkNav>}
    </Nav>
  );
};
