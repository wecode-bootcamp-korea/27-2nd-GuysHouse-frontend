import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainDropDown from './MainDropDown';
import MainCarousel from './MainCarousel';
import MainPartyList from './MainPartyList';

export default function Main() {
  const [partyList, setPartyList] = useState([]);
  useEffect(() => {
    fetch('/data/partyData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setPartyList(data);
      });
  }, []);

  return (
    <>
      <MainDropDown />
      <Box>
        <MainCarousel />
        <Title>취향을 나누는 커뮤니티, 남의집</Title>
        <MainPartyList partyList={partyList} setPartyList={setPartyList} />
      </Box>
    </>
  );
}

const Box = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  margin-top: 130px;
`;

const Title = styled.div`
  max-width: 1130px;
  margin-top: 70px;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 500;
`;
