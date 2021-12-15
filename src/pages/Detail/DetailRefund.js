import React from 'react';
import styled from 'styled-components';

export default function DetailRefund() {
  return (
    <DetailTitle>
      환불 규정
      <p>
        - 남의집 신청 후, 호스트가 초대 승인하기 전까지는 결제가 이뤄지지
        않습니다.
      </p>
      <p>
        - 초대된 남의집 취소 시, 남의집 방문 6일 전까지 결제액 전액 환불됩니다.
      </p>
      <p>
        - 초대 승인된 남의집 취소 시, 방문 5일~2일 전까지는 결제액의 30%가
        환불됩니다.
      </p>
      <p>
        - 남의집 방문 1일 전~방문 당일 및 노쇼인 경우에는 환불이 불가합니다.
      </p>
    </DetailTitle>
  );
}

const DetailTitle = styled.div`
  max-width: 740px;
  margin: 0 auto 100px;
  font-size: 26px;
  font-weight: 600;
  border-top: 1px solid #ddd;
  padding: 30px 20px 0;
  p:first-child {
    margin-top: 40px;
  }
  p {
    padding-left: 30px;
    font-weight: 400;
    font-size: 18px;
    margin-top: 20px;
  }
`;
