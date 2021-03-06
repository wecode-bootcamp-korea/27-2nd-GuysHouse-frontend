import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import TextArea from './TextArea';
import { API_ADDRESS } from '../../apiconfig';

export default function Application() {
  const token = localStorage.getItem('access_token');
  const [programMeta, setProgramMeta] = useState([]);
  const [inputMeta, setInputMeta] = useState([]);
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(API_ADDRESS.programs + `/detail/${id}`, {
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(res => setProgramMeta(res.result));
  }, [id, token]);

  useEffect(() => {
    fetch(API_ADDRESS.programs + `/detail/${id}/reserve`, {
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(res => setInputMeta(res.result));
  }, [id, token]);

  const submitAnswers = () => {
    fetch(API_ADDRESS.programs + `/detail/${id}/reserve`, {
      method: 'POST',
      headers: { Authorization: token },
      body: JSON.stringify(answers),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          alert('신청이 완료 되었습니다.');
          navigate('/');
        }
      });
  };

  const month = programMeta.start_date?.split('-')[1];
  const date = programMeta.start_date?.split('-')[2].slice(0, 2);
  const hour = programMeta.start_date?.slice(11, 13);
  const thumbnail = programMeta.thumbnail_image_url;

  return (
    <ApplicationContainer>
      <ProgressText>1.방문신청서 작성 2. 끝!</ProgressText>
      <UnderLine />
      <MainContents>
        <ContentsBox>
          <Title>{programMeta && programMeta.name}</Title>
          <Contents>{programMeta && programMeta.description}</Contents>
          <SubContents>{programMeta && programMeta.description}</SubContents>
          <Time>
            날짜 {month}월 {date}일 {hour}시
          </Time>
          <Place>장소 {programMeta && programMeta.address}</Place>
          <Cost>금액 {programMeta && ~~programMeta.price}원</Cost>
        </ContentsBox>
        <Img src={`http://${thumbnail}`} alt="img" />
      </MainContents>
      <ApplicationForm>
        <Title>방문신청서</Title>
        <SubContents>
          호스트가 게스트님의 초대 여부를 결정할 방문신청서를 작성해 주세요.
        </SubContents>
        {inputMeta?.map(list => {
          return (
            <TextArea
              key={list.question_id}
              id={list.question_id}
              context={list.context}
              answers={answers}
              setAnswers={setAnswers}
            />
          );
        })}
        <SubmitButton
          onClick={submitAnswers}
          disabled={
            Object.keys(answers).length === 4 &&
            Object.values(answers).includes('') === false
              ? false
              : true
          }
        >
          제출하기
        </SubmitButton>
      </ApplicationForm>
    </ApplicationContainer>
  );
}

const ApplicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  margin: 0 20vw;

  @media ${props => props.theme.tablet} {
    width: 100vw;
    margin: 0;
  }
  @media ${props => props.theme.mobile} {
    width: 360px;
  }
`;
const ProgressText = styled.span`
  padding: 20px 0;
  font-size: 14px;
  max-width: 800px;
  width: 100%;

  @media ${props => props.theme.tablet} {
    max-width: none;
    padding: 20px;
  }
`;
const UnderLine = styled.div`
  border-bottom: 1px solid black;
  width: 100vw;

  @media ${props => props.theme.mobile} {
    width: 100%;
  }
`;
const MainContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  max-width: 800px;
  width: 100%;
  border-bottom: 1px solid lightgray;
  padding: 50px 0 30px;

  @media ${props => props.theme.tablet} {
    max-width: none;
    width: 100%;
    padding: 50px 20px 30px;
    background: #f7f7f7;
  }
  @media ${props => props.theme.mobile} {
    max-width: none;
  }
`;
const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.span`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 30px;

  @media ${props => props.theme.tablet} {
    display: none;
  }
`;
const Contents = styled.span`
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 10px;
`;
const SubContents = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
const Time = styled.span`
  font-size: 14px;
  font-weight: 200;
  margin-bottom: 10px;
`;
const Place = styled.span`
  font-size: 14px;
  font-weight: 200;
  margin-bottom: 10px;
`;
const Cost = styled.span`
  font-size: 14px;
  font-weight: 200;
  margin-bottom: 10px;
`;
const Img = styled.img`
  width: 240px;
  height: 160px;
  background: gray;

  @media ${props => props.theme.tablet} {
    display: none;
  }
`;
const ApplicationForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  max-width: 800px;
  width: 100%;
  padding: 30px 0;

  @media ${props => props.theme.tablet} {
    max-width: none;
    padding: 30px 20px;
  }
`;
const SubmitButton = styled.button`
  width: 100%;
  height: 60px;
  color: white;
  background: ${props => (props.disabled ? 'lightgray' : '#ff895b')};
  border-radius: 4px;
`;
