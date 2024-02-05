import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ContainerLink = styled.div`
  display: flex;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #333;
  margin-right: 10px;
  font-weight: bold;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: #4caf50;
  }
`;

export const AuthNav = () => {
  return (
    <ContainerLink>
      <Link to="/register">Register</Link>
      <Link to="/login">LogIn</Link>
    </ContainerLink>
  );
};
