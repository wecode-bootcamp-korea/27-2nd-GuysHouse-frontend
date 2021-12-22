import React from 'react';
import { useState } from 'react';
import { DEFALUT_DATA } from './DefaultData';
import styled from 'styled-components';

export default function Default() {
  const [textColor, setTextColor] = useState([true, false, false]);

  const changeColor = index => {
    const defaultState = Array(3).fill(false);
    defaultState[index] = true;
    setTextColor(defaultState);
  };

  return (
    <DefaultContainer>
      <Introduce>
        자기 소개가 없습니다.
        <div>
          <Button>프로필 등록</Button>
        </div>
      </Introduce>

      <NavListCotainer>
        <ListButton>내역</ListButton>
        <Line />
        <ListButton>후기</ListButton>
      </NavListCotainer>

      <ListContainer>
        <TitleContainer>
          <Title>신청한 男의집</Title>
          <AllButton>전체보기</AllButton>
        </TitleContainer>

        <ReservationListContainer>
          {DEFALUT_DATA.map((list, index) => {
            return (
              <ReservationButton
                onClick={() => changeColor(index)}
                textColor={textColor[index]}
                key={index}
              >
                <Count textColor={textColor[index]}>{list.numbers}</Count>
                {list.title}
              </ReservationButton>
            );
          })}
        </ReservationListContainer>

        <GaysHouse>
          <TextBox>
            최근 신청한 남의집이 없으시네요!
            <br />
            지금 바로 남의집에 놀러가 보세요.
          </TextBox>
          <GaysHouseButton>男의집 둘러보기</GaysHouseButton>
        </GaysHouse>
      </ListContainer>
    </DefaultContainer>
  );
}

const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Introduce = styled.div`
  color: gray;
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 10px 20px;
  margin-top: 20px;
`;
const NavListCotainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;
const ListButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 100px;
`;
const Line = styled.div`
  border-left: 1px solid lightgray;
  height: 60%;
`;
const ListContainer = styled.div``;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
const Title = styled.span`
  font-size: 26px;
  font-weight: 700;
`;
const AllButton = styled.button`
  color: lightgray;
`;
const ReservationListContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  background: #f6f6f6;
  height: 80px;
  border-radius: 5px;
  flex: 1;
`;
const ReservationButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  color: ${props => (props.textColor ? 'black' : 'gray')};
`;
const Count = styled.span`
  margin-bottom: 8px;
  color: ${props => (props.textColor ? 'orange' : 'gray')};
`;
const GaysHouse = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextBox = styled.span`
  margin: 20px 0;
  line-height: 24px;
  color: gray;
`;
const GaysHouseButton = styled.button`
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 10px 80px;
`;
