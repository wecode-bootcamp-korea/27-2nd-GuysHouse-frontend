import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DefaultButton from '../../components/Button/DefaultButton';

const { Kakao } = window;
// Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);

export default function Login() {
  const navigate = useNavigate();
  const LoginKakao = () => {
    Kakao.Auth.loginForm({
      success: function (response) {
        fetch(process.env.REACT_APP_LOCAL, {
          method: 'GET',
          headers: { Authorization: response.access_token },
        })
          .then(res => res.json())
          .then(userData => {
            localStorage.setItem('access_token', userData.access_token);
            if (userData.access_token) {
              sessionStorage.setItem('isHost', userData.isHost);
              alert('男!!!의 집에 오신 것을 환영합니다.');
              navigate('/');
            }
          });
      },
      fail: function (error) {
        alert('로그인에 실패했습니다.');
      },
    });
  };

  const DeleteId = () => {
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function (response) {},
      fail: function (error) {},
    });

    localStorage.removeItem('access_token');
    sessionStorage.removeItem('isHost');

    if (!Kakao.Auth.getAccessToken()) {
      alert('회원탈퇴를 실패했습니다. 다시 시도해주세요.');
      return;
    }
    Kakao.Auth.logout(function () {
      alert('회원탈퇴 되었습니다. 다시 찾아주시기를 기다리겠습니다.');
    });

    navigate('/login');
  };

  return (
    <LoginBox>
      <Img src="./images/logo.png" alt="로고" onClick={DeleteId} />
      <KakaoLoginButton>
        <KakaoImg
          src="./images/Login/kakao_login_medium_narrow.png"
          alt="카카오로그인"
          onClick={LoginKakao}
        />
      </KakaoLoginButton>
      <DefaultButton
        width="200px"
        height="50px"
        color="white"
        backgroundColor="#00bf19"
        src="./images/Login/naverLogo.png"
        buttonName="네이버로 로그인"
      />
      <WebLogin>
        <Link to="">
          <EmailLogin>이메일로 로그인</EmailLogin>
        </Link>
        <Link to="">
          <Singup>회원가입</Singup>
        </Link>
      </WebLogin>
    </LoginBox>
  );
}

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 71px);
`;

const Img = styled.img`
  width: 80px;
  height: 118px;
  margin-bottom: 30px;
  margin-left: 100px;
`;

const KakaoLoginButton = styled.button`
  margin-bottom: 10px;
`;

const KakaoImg = styled.img`
  width: 200px;
  cursor: pointer;
`;

const WebLogin = styled.div`
  width: 200px;
  display: flex;
  flex-direction: flex;
  justify-content: space-between;
`;

const EmailLogin = styled.span`
  color: gray;
  cursor: pointer;
`;

const Singup = styled.span`
  font-weight: 500;
  cursor: pointer;
`;
