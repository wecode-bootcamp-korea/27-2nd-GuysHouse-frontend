import React from 'react';
import styled from 'styled-components';

export default function DetailReview() {
  return (
    <>
      <DetailTitle>
        함께한 분들의 후기 <span>5</span>
      </DetailTitle>
      <ReviewBox>
        <ReviewUSer>강** | 2021.09.12참여</ReviewUSer>
        <ReviewText>
          여유롭고 즐거운 시간이었어요! 다음에 술 마시러 꼭 다시 방문하고 싶어요
        </ReviewText>
        <ReviewUSer>강** | 2021.09.12참여</ReviewUSer>
        <ReviewText>
          꽃에 애정이 많은 호스트님 덕분에 예쁜 꽃다발을 만들어볼 수 있었습니다.
          꽃에 대한 세세한 설명, 아낌없는 수업에 감사드립니다!
        </ReviewText>
        <ReviewUSer>강** | 2021.09.12참여</ReviewUSer>
        <ReviewText>
          재밌었어용~~ 오늘 작업한 꽃다발 사진을 인증용으로 올리고 싶은데 여기
          사진 올리는 기능은 없네용 ㅋㅋㅋ 당연히 서툴고 잘하진 않았지만 그래도
          뭔가 결과물을 가져가니까 보람있고 좋으네용 ^^ 꽃을 워낙 좋아하고
          주워들은 것만 있지.. 제대로 수업을 들은 적은 없는데.. 전문적인 설명을
          들으면서도 편안한 분위기에서 꽃다발을 하나 만들어 볼 수 있어서
          좋았어용~ 본격적인 꽃수업은 너무 비싸고 부담스러운데.. 가볍게
          접근하면서도 소규모로 이해할 수 있도록 해주시는게 좋았 습니당~
        </ReviewText>
      </ReviewBox>
    </>
  );
}

const DetailTitle = styled.div`
  max-width: 740px;
  margin: 0 auto 30px;
  font-size: 26px;
  font-weight: 600;
  border-top: 1px solid #ddd;
  padding: 30px 20px 0;
  span {
    color: #f97f54;
  }
`;

const ReviewBox = styled.div`
  max-width: 740px;
  margin: 0 auto;
  padding-left: 40px;
`;

const ReviewUSer = styled.div`
  margin-top: 20px;
  margin-bottom: 8px;
  font-weight: 300;
  color: #7b7b7b;
  font-size: 15px;
`;

const ReviewText = styled.div`
  line-height: 1.67;
  letter-spacing: -0.75px;
  padding-bottom: 20px;
  font-size: 18px;
  border-bottom: 1px solid #ddd;
  color: #424242;
`;
