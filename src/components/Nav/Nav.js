import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Nav() {
  const token = window.localStorage.getItem('TOKEN');

  return (
    <NavContainer>
      <NavWrap>
        <ul>
          <Link to="/">
            <img src="/images/logo.jpeg" alt="logo" className="logoImg" />
          </Link>
          <NavItem>
            <Link to="/">남의집 둘러보기</Link>
          </NavItem>
          <NavItem>
            <Link to="/host">호스트</Link>
          </NavItem>
        </ul>
        <ul>
          <NavItem>검색</NavItem>
          {token ? (
            <NavItem>로그아웃</NavItem>
          ) : (
            <NavItem>
              <Link to="/login">로그인 / 회원가입</Link>
            </NavItem>
          )}
        </ul>
      </NavWrap>
    </NavContainer>
  );
}
const NavContainer = styled.div`
  padding: 15px;
  border-bottom: 1px solid #dbdbdb;
`;

const NavWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1150px;
  margin: 0 auto;

  ul {
    display: flex;
    align-items: center;

    .logoImg {
      width: 40px;
    }
  }
`;

const NavItem = styled.li`
  margin-left: 20px;
  font-weight: ${({ theme }) => theme.weightThin};
`;
