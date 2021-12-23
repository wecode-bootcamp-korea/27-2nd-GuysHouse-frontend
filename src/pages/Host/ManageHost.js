import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Program from './Program';
import { API_ADDRESS } from '../../apiconfig';

export default function ManageHost() {
  const [userData, setUserData] = useState();

  let token = window.localStorage.getItem('access_token') || '';

  useEffect(() => {
    fetch(API_ADDRESS.hosting, {
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(res => {
        setUserData(res.result);
      });
  }, []);

  return (
    <ManageHostWrap>
      <ManageBox>
        <AllProgramsBox>
          <AllProgramHead>전체 남의집</AllProgramHead>
          <ProgramList>
            {userData ? (
              userData.programs.map(el => {
                return (
                  <Program
                    key={el.id}
                    title={el.name}
                    detail={el.description}
                    address={el.address}
                    thumbnailImg={el.thumbnail_image}
                  />
                );
              })
            ) : (
              <p>dodododo</p>
            )}
          </ProgramList>
        </AllProgramsBox>
        <NewProgramBtn to="/host/create">새로운 남의집 만들기</NewProgramBtn>
      </ManageBox>
      <RightBox>
        <ProfileBox>
          <ProfileImgWrap>
            <Img src={userData && userData.host.profile_image} alt="" />
            <EditBtn>
              <i class="fas fa-pen" />
            </EditBtn>
          </ProfileImgWrap>
          <ProfileName>{userData && userData.host.nickname}</ProfileName>
          <HostDescription>
            {userData && userData.host.host_description}
          </HostDescription>
        </ProfileBox>
        <BannerWrap>
          <BannerImg src="/images/banner1.png" />
        </BannerWrap>
        <BannerWrap>
          <BannerImg src="/images/banner2.png" />
        </BannerWrap>
      </RightBox>
    </ManageHostWrap>
  );
}

const ManageHostWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  width: 970px;
  margin: 0 auto;
  background-color: #fbfaf8;

  @media ${props => props.theme.laptop} {
    flex-direction: column;
  }
`;

const ManageBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  width: 100%;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 307px;

  @media ${props => props.theme.laptop} {
    max-width: 100%;
    order: 1;
  }
`;

const AllProgramsBox = styled.div`
  width: 100%;
  border: 1px solid #dbdbdb;
  margin-bottom: 20px;
`;

const AllProgramHead = styled.h1`
  padding: 20px;
  border-bottom: 1px solid #dbdbdb;
  font-size: 18px;
  font-weight: 700;
`;

const ProgramList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 30px 20px 10px 20px;
`;

const NewProgramBtn = styled(Link)`
  padding: 16px 0px;
  background-color: #fe8255;
  color: white;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;

  &:hover {
    color: white;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  width: 100%;
  border: 1px solid #dbdbdb;
`;

const ProfileImgWrap = styled.div`
  width: 100px;
  width: 100px;
  margin-bottom: 30px;
  position: relative;
`;

const HostDescription = styled.p``;

const EditBtn = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 100%;
  bottom: 0;
  right: 0;
  font-size: 14px;
  display: inline;
  background-color: white;
  border: 1px solid gray;
`;

const ProfileName = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 100%;
`;
const BannerWrap = styled.div`
  padding: 15px 20px 0 20px;
  margin-top: 20px;
  background-color: #f1eee9;
`;
const BannerImg = styled.img`
  width: 100%;
`;
