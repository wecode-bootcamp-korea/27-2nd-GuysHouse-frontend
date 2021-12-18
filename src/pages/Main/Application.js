import React, { useEffect, useState } from 'react';
import style from 'styled-components';
import { ARR_DATA } from './ArrData';
import { useNavigate } from 'react-router-dom';
import TextArea from './TextArea';

export default function Application() {
  const [programMeta, setProgramMeta] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/partyData.json')
      .then(res => res.json())
      .then(res => setProgramMeta(res[0]));
  }, []);

  const submitAnswers = () => {
    fetch('', {
      method: 'POST',
      body: JSON.stringify(),
    });
    alert('신청이 완료 되었습니다.');
    navigate('/');
  };

  return (
    <ApplicationContainer>
      <Progress>
        <ProgressText>1.방문신청서 작성</ProgressText>
        <ProgressText>2.끝!</ProgressText>
      </Progress>
      <UnderLine />
      <MainContents>
        <ContentsBox>
          <Title>{programMeta.title}</Title>
          <Contents>{programMeta.detail}</Contents>
          <SubContents>{programMeta.detail}</SubContents>
          <Time>
            날짜 {programMeta.date} {programMeta.time}
          </Time>
          <Place>장소 {programMeta.address}</Place>{' '}
          <Cost>금액 {programMeta.price}원</Cost>
        </ContentsBox>
        <Img src={programMeta.thumb} alt="img" />
      </MainContents>
      <ApplicationForm>
        <Title>방문신청서</Title>
        <SubContents>
          호스트가 게스트님의 초대 여부를 결정할 방문신청서를 작성해 주세요.
        </SubContents>
        {ARR_DATA.map(list => {
          return (
            <TextArea
              key={list.id}
              id={list.id - 1}
              necessary={list.necessary}
              text={list.text}
              checkbox={list.checkbox}
            />
          );
        })}

        <SubmitButton onClick={submitAnswers}>제출하기</SubmitButton>
      </ApplicationForm>
    </ApplicationContainer>
  );
}

const ApplicationContainer = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Progress = style.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 20px 0;
  width: 800px;
`;
const UnderLine = style.div`
  border-bottom: 1px solid black;
  width: 100vw;
`;
const ProgressText = style.span`
  font-size: 14px;
  
`;
const MainContents = style.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 800px;
  border-bottom: 1px solid lightgray;
  padding: 50px 0 30px;
`;
const ContentsBox = style.div`
  display: flex;
  flex-direction: column;
`;
const Title = style.span`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 30px;
`;
const Contents = style.span`
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 10px;
`;
const SubContents = style.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
const Time = style.span`
  font-size: 14px;
  font-weight: 200;
  margin-bottom: 10px;
`;
const Place = style.span`
  font-size: 14px;
  font-weight: 200;
  margin-bottom: 10px;
`;
const Cost = style.span`
  font-size: 14px;
  font-weight: 200;
  margin-bottom: 10px;
`;
const Img = style.img`
  width: 240px;
  height: 160px;
  background: gray;
`;
const ApplicationForm = style.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 800px;
  padding: 30px 0;
`;
const SubmitButton = style.button`
  width: 100%;
  height: 60px;
  color: white;
  background: ${props => (props.disabled ? 'lightgray' : '#ff895b')};
  border-radius: 4px;
`;
