import React from 'react';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

export default function MainPartyList({ partyList, setPartyList }) {
  // const navigate = useNavigate();

  const heartPost = id => {
    // fetch(``, {
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
      {partyList.map((party, idx) => (
        <Col key={party.id}>
          <Card>
            <Card.Img
              variant="top"
              src="https://cdn.naamezip.com/1593765422541.jpg?w=640&f=jpeg"
            />
            <Card.Body>
              <FlexBox>
                <Card.Title>{party.title}</Card.Title>
                <Heart
                  src={
                    party.isliked ? 'images/heart.png' : 'images/emptyHeart.png'
                  }
                  onClick={() => heartPost(party.id - 1)}
                />
              </FlexBox>
              <Title>{party.detail}</Title>

              <Box>
                <Summary>
                  <Span>{party.address}</Span>

                  <span>{party.date}</span>

                  <span>,{party.time}</span>
                </Summary>
                <Span>{party.price.toLocaleString()}원</Span>
              </Box>
            </Card.Body>
          </Card>
        </Col>
      ))}
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
  position: absolute;
  width: 20px;
  height: 20px;
  right: 20px;
  cursor: pointer;
  :hover {
    width: 22px;
    height: 22px;
  }
`;
