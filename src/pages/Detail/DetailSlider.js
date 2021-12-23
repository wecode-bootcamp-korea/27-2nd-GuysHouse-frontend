import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

export default function DetailSlider({ detailImg }) {
  return (
    <>
      <DetailTitle>공간 소개</DetailTitle>
      <SliderBox>
        <Carousel>
          {detailImg.map(imgSrc => {
            return (
              <Carousel.Item key={imgSrc.id}>
                <img
                  className="d-block w-100"
                  src={`http://${imgSrc.image}`}
                  alt="First slide"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </SliderBox>
    </>
  );
}

const DetailTitle = styled.div`
  max-width: 740px;
  margin: 0 auto 100px;
  font-size: 26px;
  font-weight: 600;
  border-top: 1px solid #ddd;
  padding: 30px 20px 0;
`;

const SliderBox = styled.div`
  max-width: 740px;
  margin: 0 auto 100px;
`;
