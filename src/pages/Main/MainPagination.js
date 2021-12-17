import React, { useState } from 'react';
import styled from 'styled-components';
import { Pagination } from 'react-bootstrap';

const MainPagination = ({ postsPerPage, totalPosts, paginate }) => {
  const [btnActive, setBtnActive] = useState(1);
  let items = [];
  for (
    let number = 1;
    number <= Math.ceil(totalPosts / postsPerPage);
    number++
  ) {
    items.push(number);
  }

  return (
    <FlexBox>
      {items.map(pageNum => (
        <Pagination key={pageNum}>
          <Pagination.Item
            active={btnActive === pageNum}
            onClick={() => {
              paginate(pageNum);
              setBtnActive(pageNum);
            }}
          >
            {pageNum}
          </Pagination.Item>
        </Pagination>
      ))}
    </FlexBox>
  );
};
const FlexBox = styled.div`
  display: flex;
  width: 130px;
  margin: 0 auto 30px;
`;

export default MainPagination;
