import React from 'react';
import styled from 'styled-components';

export default function RegisterHost() {
  return (
    <RegisterHostWrap>
      <Section1>
        <Img1 src="/images/roof.png" alt="" />
        <InviteHead>
          내 공간에서 모임을 열어
          <br /> 사람들을 초대해보세요.
        </InviteHead>
        <RegisterButton>지금 시작하기</RegisterButton>
        <Img2 src="/images/register1.png" alt="" />
      </Section1>
      <Section2>
        <FlexWrap1>
          <FlexHead>남의집이란</FlexHead>
          <FlexP>
            가정집, 작업실, 동네가게 등 취향이 담긴
            <br />
            개인 공간에 모여 대화를 나누는 커뮤니티예요.
          </FlexP>
        </FlexWrap1>
        <FlexWrap2>
          <FlexHead>
            호스트가
            <br />
            되어보세요
          </FlexHead>
          <FlexP>
            어떤 주제든 괜찮아요. 좋아하는 주제로 모임을 만들고,
            <br /> 취향이 맞는 사람들을 나의 공간에 초대해보세요.
            <br /> 초대를 받고 놀러 온 이들과는 즐겁게 대화하며 취향을
            나눠보세요.
          </FlexP>
        </FlexWrap2>
        <Img3 src="/images/register2.png" alt="" />
      </Section2>
    </RegisterHostWrap>
  );
}

const RegisterHostWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 80px;
`;

const Section1 = styled.section``;

const InviteHead = styled.h1`
  margin-bottom: 50px;
  margin-top: -20px;
  text-align: center;
  font-family: SourceHanSerifK, serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -2px;
`;

const RegisterButton = styled.button`
  display: block;
  width: 200px;
  height: 50px;
  margin: 0 auto;
  border-radius: 300px;
  background-color: #fe8256;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.9px;
`;

const Section2 = styled.section`
  background-color: #f8f9f3;
`;

const Img1 = styled.img`
  width: 800px;
  margin: 0 auto;
`;

const Img2 = styled.img`
  width: 500px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: -30px;
  z-index: 2;
  position: relative;
`;

const Img3 = styled.img`
  width: 800px;
  margin: 0 auto;
`;

const FlexWrap1 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 750px;
  padding: 120px 0px 70px;
  margin: 0 auto;
  border-bottom: 1px solid #dbdbdb;
`;
const FlexWrap2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 750px;
  padding: 70px 0px 130px;
  margin: 0 auto;
`;

const FlexHead = styled.h1`
  flex-basis: 25%;
  font-size: 30px;
  line-height: 1.5;
  font-weight: 700;

  font-family: SourceHanSerifK, serif;
`;

const FlexP = styled.p`
  flex-basis: 70%;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  color: gray;
  text-align: left;
`;
