import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

export default function MainPartyList({
  partyList,
  currentpartyList,
  setPartyList,
}) {
  // const navigate = useNavigate();

  const heartPost = id => {
    // fetch(`API_ADDRESS.programs${id}`, {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `token`,
    //   },
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     if (data.MESSAGE === 'INVALID_TOKEN') {
    //       alert('로그인이 필요합니다!');
    //       navigate('/signin');
    //       return;
    //     }
    //     // data.MESSAGE === 'SUCCESS' ? handleToggle(id) : alert(data.MESSAGE);
    //   })
    handleToggle(id);
    // .catch(error => alert(error));
  };

  const goToDetail = id => {
    // navigate(`/detail/${id}`);
  };

  const handleToggle = id => {
    const newpartyList = {
      ...partyList[id],
      isliked: !partyList[id].isliked,
    };
    const newParty = partyList.map((item, itemIndex) => {
      if (itemIndex === id) {
        return newpartyList;
      } else {
        return item;
      }
    });
    setPartyList(newParty);
  };

  return (
    <Row xs={1} md={3} className="g-4">
      {currentpartyList.map(party => {
        const dateData = party.start_date;
        const month = dateData.split('-')[1];
        const date = dateData.split('-')[2].slice(0, 2);
        const hour = dateData.slice(11, 13);
        const minutes = dateData.slice(14, 16);
        return (
          <Col key={party.id}>
            <Card
              onClick={() => {
                goToDetail(party.id);
              }}
            >
              <Link to={`/detail/${party.id}`}>
                <Card.Img
                  variant="top"
                  src={`http://${party.thumbnail_image_url}`}
                  style={{ height: '250px' }}
                />
              </Link>
              <Card.Body>
                <FlexBox>
                  <Link to={`/detail/${party.id}`}>
                    <Card.Title>{party.name}</Card.Title>
                  </Link>
                  <Heart
                    src={
                      party.isliked
                        ? 'images/heart.png'
                        : 'images/emptyHeart.png'
                    }
                    onClick={() => heartPost(party.id - 1)}
                  />
                </FlexBox>
                <Title>{party.description}</Title>

                <Box>
                  <Summary>
                    <Span>{party.address}</Span>

                    <span>{`${month}월${date}일`}ㅣ</span>

                    <span>{`${hour}시${minutes}분`}</span>
                  </Summary>
                  <Span>{Math.ceil(party.price).toLocaleString()}원</Span>
                </Box>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-top: 1px solid gray;
`;

const Summary = styled.div`
  font-size: 12px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  padding-bottom: 30px;
  font-size: 15px;
`;

const Span = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Heart = styled.img`
  width: 20px;
  height: 20px;
  z-index: 2;
  right: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;
