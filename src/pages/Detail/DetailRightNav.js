import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const { Kakao } = window;

export default function DetailRightNav({ detail }) {
  const [shareModal, setShareModal] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);
  const [copyConfirmModal, setCopyConfirmModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleOpenShare = () => {
    setShareModal(true);
  };

  const handleCloseShare = () => {
    setShareModal(false);
  };

  const sendKakaoLink = () => {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '우리 같이 男의 집 커뮤니티에 참여해요!',
        description:
          '취향이 담긴 개인 공간에 모여 대화를 나누는 커뮤니티 男의 집입니다',
        imageUrl: 'https://cdn.naamezip.com/1624181743849.PNG?w=640&f=jpeg',
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: '男의 집 둘러보기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };

  const sendFacebookLink = () => {
    let sendUrl = window.location.href;
    window.open('http://www.facebook.com/sharer/sharer.php?u=' + sendUrl);
  };

  const copy = () => {
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.append(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopyConfirmModal(true);
    setShareModal(false);
  };

  const shareConfirm = () => {
    setCopyConfirmModal(false);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;

    if (position > 1029) {
      setScrollPosition(true);
    } else if (position < 1029) {
      setScrollPosition(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Nav position={scrollPosition}>
        <Wrapper>
          <div>
            <Profile src={detail.thumbnail_image_url} />
            <LeftBox>
              <h3>{detail.name}</h3>
              <p>{detail.description}</p>
            </LeftBox>
          </div>
          <RightBox>
            <div>{Number(detail.price).toLocaleString()}원</div>
            <Button>신청 예약하기</Button>
          </RightBox>
        </Wrapper>
      </Nav>

      <BottomNav>
        <div>
          <p>{detail.name}</p>
          {Number(detail.price).toLocaleString()}원
        </div>
        <button>신청 예약하기</button>
      </BottomNav>

      <RightNav>
        <IconBox onClick={handleOpenShare}>
          <Icon src="/images/share.png" />
        </IconBox>
        <IconBox onClick={scrollToTop}>
          <Icon src="/images/top.png" />
        </IconBox>
      </RightNav>
      {shareModal ? (
        <ModalBox>
          <h2>남의집 공유하기</h2>
          <FlexBox>
            <SocialItem>
              <img
                src="/images/kakao.png"
                onClick={sendKakaoLink}
                alt="Kakao"
              />
              <span>카카오톡</span>
            </SocialItem>
            <SocialItem>
              <img
                src="/images/facebook.png"
                onClick={sendFacebookLink}
                alt="Facebook"
              />
              <span>페이스북</span>
            </SocialItem>
            <SocialItem>
              <img src="/images/LinkCopy.png" onClick={copy} alt="Link" />
              <span>링크복사</span>
            </SocialItem>
          </FlexBox>
          <Close onClick={handleCloseShare}>닫기</Close>
        </ModalBox>
      ) : null}
      {copyConfirmModal ? (
        <ShareModal>
          <ShareTitle>링크가 복사되었습니다.</ShareTitle>
          <ShareConfirm onClick={shareConfirm}>확인</ShareConfirm>
        </ShareModal>
      ) : null}
      {shareModal || (copyConfirmModal && <Span />)}
    </>
  );
}

const BottomNav = styled.div`
  position: sticky;
  bottom: 0;
  border-top: 1px solid #ddd;
  background-color: #fff;
  padding: 25px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 779px) {
    display: none;
  }
  div {
    p {
      font-weight: 300;
      font-size: 17px;
      margin-bottom: 5px;
    }
    font-weight: 700;
    font-size: 20px;
  }

  button {
    max-height: 50px;
    min-width: 150px;
    border-radius: 3px;
    padding: 13px 34px;
    background-color: #f97f54;
    color: white;
    font-size: 15px;
    font-weight: 700;
  }
`;

const Icon = styled.img`
  width: 22px;
  height: 24px;
`;

const IconBox = styled.button`
  margin-bottom: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #ddd;
  text-align: center;
  display: block;
  padding: 1px 12px;
  &:hover {
    background-color: rgb(249, 249, 249);
  }
`;

const RightNav = styled.div`
  position: fixed;
  top: 250px;
  transform: translateY(54px);
  z-index: 999;
  right: 70px;
  min-width: 49px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const ModalBox = styled.div`
  z-index: 1000;
  padding: 20px;
  box-shadow: 0 2px 20px 0 black;
  width: 288px;
  height: 210px;
  position: fixed;
  top: 37%;
  left: 40%;
  background-color: white;
  min-width: 250px;
  min-height: 106px;
  h2 {
    font-size: 18px;
    font-weight: 500;
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

const SocialItem = styled.div`
  text-align: center;
  img {
    cursor: pointer;
    width: 60px;
    height: 60px;
    margin-bottom: 8px;
  }
  span {
    font-size: 15px;
    font-weight: 200;
  }
`;

const Close = styled.p`
  position: absolute;
  right: 10%;
  margin-top: 30px;
  color: rgb(117, 117, 117);
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    color: rgb(175, 175, 175);
  }
`;

const Span = styled.span`
  z-index: 999;
  content: '';
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: gray;
  opacity: 0.6;
`;

const Nav = styled.div`
  z-index: 998;
  background-color: white;
  position: fixed;
  top: 0;
  padding: 22px 70px;
  width: 100%;
  box-shadow: 0 3px 6px 0 #ddd;
  height: 110px;
  transform: ${({ position }) =>
    position ? 'translateY(0)' : 'translateY(-150%)'};
  transition: all 0.7s ease-in-out;
  @media screen and (max-width: 780px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
  }
`;

const Profile = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const LeftBox = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  margin-top: 12px;

  h3 {
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: 600;
  }
  p {
    font-size: 18px;
    font-weight: 400;
  }
`;

const RightBox = styled.div`
  display: flex;
  align-items: center;

  div {
    font-size: 24px;
    font-weight: 700;
    margin-right: 24px;
  }
`;

const Button = styled.button`
  padding: 16.5px 40px;
  border-radius: 3px;
  background-color: #fe8256;
  font-size: 18px;
  font-weight: 700;
  color: white;
  min-width: 60px;
  cursor: pointer;
`;

const ShareModal = styled.div`
  z-index: 1000;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0 2px 20px 0 black;
  width: 250px;
  height: 106px;
  position: fixed;
  top: 37%;
  left: 40%;
  background-color: white;
  min-width: 125px;
  min-height: 53px;
`;

const ShareTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
`;

const ShareConfirm = styled.p`
  color: rgb(254, 130, 86);
  font-weight: 700;
  position: absolute;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
`;
