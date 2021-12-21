import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

export default function MainDropDown({ setPartyList }) {
  const [selectLimit, setSelectLimit] = useState('');
  const [selectCategory, setSelectCategory] = useState('');
  const [selectSort, setSelectSort] = useState('');

  let limit = selectLimit.value ? `?is_open=${selectLimit.value}` : '?';
  let category = [selectCategory].map(el => {
    return `&category_id=${el.value}`;
  });
  let sort = selectSort ? `&sort=${selectSort.value}` : '';

  useEffect(() => {
    fetch(
      `http://10.58.0.189:8000/programs${limit || ''}${category.join('')}${
        sort || ''
      }`,
      {
        method: 'get',
      }
    )
      .then(res => res.json())
      .then(data => {
        setPartyList(data.result);
      });
  }, [
    selectLimit,
    selectCategory,
    selectSort,
    limit,
    category,
    sort,
    setPartyList,
  ]);

  const handleOpenOrClose = option => {
    setSelectLimit(option);
  };

  const handleCategory = option => {
    setSelectCategory(option);
  };

  const handleSort = option => {
    setSelectSort(option);
  };

  const handleRefresh = () => {
    setSelectLimit('');
    setSelectCategory('');
    setSelectSort('');
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
        <Button onClick={handleRefresh}>필터 초기화</Button>
      </SelectFlexBox>
    </Box>
  );
}

const Box = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #dbdbdb;
  background-color: white;
  z-index: 3;
`;

const SelectBox = styled.div`
  max-width: 300px;
  width: 100%;
  height: 100px;
`;

const SelectFlexBox = styled.div`
  max-width: 1150px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
`;

const Button = styled.button`
  background-color: white;
  color: hsl(0, 0%, 50%);
  padding: 10px;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 4px;
  min-width: 115px;
  height: 100%;
  margin-bottom: 62px;
  align-items: center;
  :hover {
    background-color: hsl(0, 0%, 93%);
  }
`;

const OPENORCLOSE_LIST = [
  { value: 'True', label: '🔓 열렸다 남의집' },
  { value: 'False', label: '🔒 닫혔다 남의집' },
];

const CATEGORY_LIST = [
  { value: '3', label: '🍕 먹고마시는 남의집' },
  { value: '4', label: '🏋️ 취향나누는 남의집' },
  { value: '5', label: '🤩 인기많은 남의집' },
];

const SORT_LIST = [
  { value: '-created_at', label: '🥳 최신 등록순' },
  { value: 'price', label: '💵 낮은 가격순' },
  { value: '-price', label: '💰 높은 가격순' },
];
