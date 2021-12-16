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
        <Route path="/create" element={<CreateHost />} />
        <Route path="/manage" element={<ManageHost />} />
      </Routes>
    </HostWrap>
  );
}

const HostWrap = styled.div`
  display: flex;
  max-width: 1150px;
  margin: 0 auto;
  height: 100%;
`;

const LeftNav = styled.div`
  border-right: 1px solid #dbdbdb;
`;
