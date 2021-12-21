import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainDropDown from './MainDropDown';
import MainCarousel from './MainCarousel';
import MainPartyList from './MainPartyList';
import MainPagination from './MainPagination';

export default function Main() {
  const [partyList, setPartyList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPartyList = partyList.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    fetch(`http://10.58.0.189:8000/programs`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setPartyList(data);
      });
  }, []);

  return (
    <>
      <MainDropDown setPartyList={setPartyList} />
      <Box>
        <MainCarousel />
        <Title>취향을 나누는 커뮤니티, 남의집</Title>
        <MainPartyList
          currentpartyList={currentPartyList}
          setPartyList={setPartyList}
          partyList={partyList}
        />
        <MainPagination
          postsPerPage={postsPerPage}
          totalPosts={partyList.length}
          paginate={paginate}
        />
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
