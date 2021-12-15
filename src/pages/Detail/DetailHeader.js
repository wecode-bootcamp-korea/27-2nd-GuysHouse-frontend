import React from 'react';
import styled from 'styled-components';

export default function DetailHeader({ detail }) {
  return (
    <>
      <Thumb src={detail.thumb} />
      <Title>
        {detail.title}
        <Title className="subTitle">{detail.detail}</Title>
      </Title>
    </>
  );
}

const Thumb = styled.img`
  max-width: 740px;
  max-height: 370px;
  margin: 0 auto;
`;

const Title = styled.div`
  max-width: 740px;
  margin: 0 auto;
  text-align: center;
  font-size: 27px;
  font-weight: 550;
  margin-top: 25px;
  .subTitle {
    font-size: 20px;
    font-weight: 400;
    padding-bottom: 40px;
    border-bottom: 1px solid #ddd;
  }
`;
