import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Nav() {
  const { Kakao } = window;
  const token = window.localStorage.getItem('access_token');
  const isHost = window.localStorage.getItem('isHost');

  const navigate = useNavigate();
  const LogoutKakao = () => {
    if (!Kakao.Auth.getAccessToken()) {
      alert('로그아웃을 실패했습니다.');
      return;
    }
    Kakao.Auth.logout(function () {
      alert('로그아웃 되었습니다.');
      navigate('/login');
    });

    localStorage.removeItem('access_token');
    localStorage.removeItem('isHost');
  };

  return (
    <NavContainer>
      <NavWrap>
        <MenuList>
          <NavLink to="/">
            <Img src="/images/logo.png" alt="logo" className="logoImg" />
          </NavLink>
          <NavItem>
            <NavLink to="/">남의집 둘러보기</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={isHost === 'true' ? '/host/manage' : '/register-host'}>
              남의집 호스트
            </NavLink>
          </NavItem>
        </MenuList>
        <MenuList2>
          <NavItem>
            <i className="fas fa-search" />
          </NavItem>
          {token ? (
            <NavItem onClick={LogoutKakao}> 로그아웃</NavItem>
          ) : (
            <NavItem>
              <Link to="/login">로그인</Link>
            </NavItem>
          )}
        </MenuList2>
      </NavWrap>
    </NavContainer>
  );
}
const NavContainer = styled.div`
  position: sticky;
  top: 0;
  padding: 15px;
  border-bottom: 1px solid #dbdbdb;
  background-color: white;
  z-index: 4;
`;

const NavWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1150px;
  margin: 0 auto;

  .active {
    font-weight: 600;
  }
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;

  .logoImg {
    width: 40px;
    margin-right: 50px;
  }

  li:nth-child(2) {
    @media ${props => props.theme.tablet} {
      display: none;
    }
  }

  /* li:nth-child(3) {
    @media ${props => props.theme.tablet} {
      display: none;
    }
  } */
`;

const MenuList2 = styled.ul`
  display: flex;
  align-items: center;

  li:first-child {
    @media ${props => props.theme.tablet} {
      display: none;
    }
  }
`;

const Img = styled.img`
  max-width: 26px;
  height: 40px;
`;

const NavItem = styled.li`
  margin-left: 20px;
  font-weight: ${({ theme }) => theme.weightThin};
`;
