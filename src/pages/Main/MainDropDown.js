import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

export default function MainDropDown() {
  const [selectLimit, setSelectLimit] = useState('');
  const [selectCategory, setSelectCategory] = useState('');
  const [selectSort, setSelectSort] = useState('');

  const handleOpenOrClose = option => {
    setSelectLimit(option);
  };

  const handleCategory = option => {
    setSelectCategory(option);
  };

  const handleSort = option => {
    setSelectSort(option);
  };

  return (
    <Box>
      <SelectFlexBox>
        <SelectBox>
          <Select
            options={OPENORCLOSE_LIST}
            placeholder="모객상태"
            onChange={option => handleOpenOrClose(option)}
            value={selectLimit}
            isSearchable={false}
          />
        </SelectBox>

        <SelectBox>
          <Select
            options={CATEGORY_LIST}
            value={selectCategory}
            placeholder="카테고리"
            isMulti
            makeAnimated={true}
            onChange={option => handleCategory(option)}
            isSearchable={false}
          />
        </SelectBox>
        <SelectBox>
          <Select
            value={selectSort}
            options={SORT_LIST}
            placeholder="정렬"
            onChange={option => handleSort(option)}
            isSearchable={false}
          />
        </SelectBox>
      </SelectFlexBox>
    </Box>
  );
}

const Box = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #dbdbdb;
  background-color: white;
  z-index: 2;
`;

const SelectBox = styled.div`
  max-width: 300px;
  width: 100%;
`;

const SelectFlexBox = styled.div`
  max-width: 1150px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const OPENORCLOSE_LIST = [
  { value: 'open', label: '🔓열렸다 남의집' },
  { value: 'close', label: '🔒닫혔다 남의집' },
];

const CATEGORY_LIST = [
  { value: 'eat', label: '🍕먹고마시는 남의집' },
  { value: 'hobby', label: '🏋️취향나누는 남의집' },
  { value: 'recommend', label: '🤩인기많은 남의집' },
];

const SORT_LIST = [
  { value: 'recent', label: '🥳최신 등록순' },
  { value: 'low', label: '💵낮은 가격순' },
  { value: 'high', label: '💰높은 가격순' },
];
