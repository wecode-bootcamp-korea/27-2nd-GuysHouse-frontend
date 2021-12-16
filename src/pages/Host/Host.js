import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import HostNav from './HostNav';
import CreateHost from './CreateHost';
import ManageHost from './ManageHost';

export default function Host() {
  return (
    <HostWrap>
      <LeftNav>
        <HostNav />
      </LeftNav>
      <Routes>
        <Route path="/" element={<CreateHost />} />
        <Route path="/create" element={<ManageHost />} />
      </Routes>
    </HostWrap>
  );
}

const HostWrap = styled.div`
  display: flex;
  height: 100%;
`;

const LeftNav = styled.div`
  border-right: 1px solid #dbdbdb;
`;
