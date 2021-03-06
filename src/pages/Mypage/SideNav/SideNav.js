import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function SideNav() {
  return (
    <SideNavContainer>
      <UserInfo>
        <Name>김자반</Name>
        <Email>javan@naver.com</Email>
        <Certification>카카오계정</Certification>
        <Certification>보인인증 완료</Certification>
      </UserInfo>
      <Administration>
        <AdministrationTitle>
          <Link to="/mypage">마이페이지</Link>
        </AdministrationTitle>

        <AdministrationTitle>
          남의집 관리
          <Review>
            <Link to="/mypage/history">내역</Link>
          </Review>
          <Review>후기</Review>
        </AdministrationTitle>

        <AdministrationTitle>
          계정 관리
          <Review>프로필 수정</Review>
          <Review>개인정보 수정</Review>
        </AdministrationTitle>

        <AdministrationTitle>결제 수단 관리</AdministrationTitle>
        <Logout>로그아웃</Logout>
      </Administration>
    </SideNavContainer>
  );
}
const SideNavContainer = styled.div`
  min-width: 285px;
  height: calc(100vh - 71px);
`;
const UserInfo = styled.div``;
const Name = styled.div`
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 16px;
`;
const Email = styled.div`
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 300;
`;
const Certification = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: lightgray;
  margin-right: 10px;
`;
const Administration = styled.ul`
  margin: 60px 0;
`;
const AdministrationTitle = styled.li`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 50px;
`;
const Review = styled.li`
  font-size: 16px;
  font-weight: 200;
  margin: 20px 0;
`;
const Logout = styled.div``;
