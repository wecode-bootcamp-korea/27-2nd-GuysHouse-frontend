import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function HostNav() {
  return (
    <HostSideNav>
      <HostNavList>
        <NavLink exact to="/host/manage">
          <li>남의집 관리</li>
        </NavLink>
        <NavLink exact to="/host/create">
          <li>남의집 만들기</li>
        </NavLink>
      </HostNavList>
    </HostSideNav>
  );
}

const HostSideNav = styled.div`
  width: 180px;
  height: 100vh;
  padding-top: 30px;
  font-size: 14px;
  font-weight: ${props => props.theme.weightRegular};
  color: #8e8e8e;
`;

const HostNavList = styled.ul`
  height: 100%;

  .active {
    color: #fe8255;
  }

  li {
    padding: 20px;

    &:hover {
      background-color: #f6f6f6;
    }
  }
`;
