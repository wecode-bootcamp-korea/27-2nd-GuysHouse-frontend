import React from 'react';
import styled from 'styled-components';

export default function DetailInfo({ detail }) {
  return (
    <InfoBox>
      <Info>
        <div>
          <span className="miniTitle">진행일자</span>
          <span>
            {detail.date} {detail.time}
          </span>
        </div>
        <div>
          <span className="miniTitle">초대인원</span>
          <span>{detail.limit}명</span>
        </div>
        <div>
          <span className="miniTitle">입장료 </span>
          <span>&ensp;{Number(detail.price).toLocaleString()}원</span>
        </div>
      </Info>

      <Info>
        <div>
          <span className="miniTitle">진행장소</span>
          <span>{detail.address}</span>
        </div>
        <div>
          <span className="miniTitle">진행시간</span>
          <span>약 {detail.runningTime}시간</span>
        </div>
        <div>
          <span className="miniTitle">준비물 </span>
          <span>&ensp; {detail.materials}</span>
        </div>
      </Info>
    </InfoBox>
  );
}

const InfoBox = styled.div`
  display: flex;
  max-width: 740px;
  margin: 0 auto;
  padding: 30px 0 100px;
`;

const Info = styled.div`
  flex-basis: 50%;
  div {
    margin-bottom: 20px;
  }

  .miniTitle {
    margin-right: 20px;
    font-weight: 300;
    color: gray;
  }
`;
