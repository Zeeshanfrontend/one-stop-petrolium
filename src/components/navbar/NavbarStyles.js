import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #fff;
  padding: 20px 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const Logo = styled.div`
  img{
    height: 100px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const MenuItem = styled(NavLink)`
 color: #9C7E45;
 text-decoration: none;
 font-size: 17px;
 font-weight: 600;
 color: #9C7E45;

 /* &.active {
    color: #000;
} */
`;