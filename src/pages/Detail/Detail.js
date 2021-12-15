import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DetailHeader from './DetailHeader';
import DetailInfo from './DetailInfo';
import DetailHostBox from './DetailHostBox';
import DetailSlider from './DetailSlider';
import DetailRefund from './DetailRefund';
import DetailReview from './DetailReview';
// import { useParams } from 'react-router-dom';
import DetailRightNav from './DetailRightNav';

export default function Detail() {
  // const { id } = useParams();

  const [detail, setDetail] = useState([]);
  const [hostData, setHostData] = useState([]);
  const [detailImg, setDetailImg] = useState([]);

  useEffect(() => {
    fetch('/data/detailData.json', {
      method: 'get',
    })
      .then(res => res.json())
      .then(data => {
        setDetail(data[0]);
        setHostData(data[0].host[0]);
        setDetailImg(data[0].detail_img);
      });
  }, []);

  return (
    <>
      <DetailHeader detail={detail} />
      <DetailInfo detail={detail} />
      <DetailHostBox hostData={hostData} />
      <Button>신청 예약하기</Button>
      <DetailSlider detailImg={detailImg} />
      <DetailRefund />
      <DetailReview />
      <DetailRightNav detail={detail} />
    </>
  );
}

const Button = styled.button`
  width: 338px;
  display: block;
  padding-top: 16.5px;
  padding-bottom: 16.5px;
  cursor: pointer;
  margin: 40px auto 100px;
  text-align: center;
  border-radius: 3px;
  font-size: 18px;
  background-color: #fe8256;
  font-weight: 700;
  color: white;
`;
