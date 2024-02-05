import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/auth-operations';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Username = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

const LogoutButton = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <LogoutButton type="button" onClick={() => dispatch(logout())}>
        LogOut
      </LogoutButton>
    </Wrapper>
  );
};
