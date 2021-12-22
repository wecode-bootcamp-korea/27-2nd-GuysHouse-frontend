import React from 'react';
import styled from 'styled-components';

export default function DetailHostBox({ hostData }) {
  return (
    <HostBox>
      <div>
        <Profile src={hostData.profile_image_url} />
      </div>
      <ProfileList>
        <li>호스트</li>
        <li>{hostData.nickname}</li>
        <li>{hostData.host_description}</li>
      </ProfileList>
    </HostBox>
  );
}
const HostBox = styled.div`
  max-width: 740px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fafafa;
  display: flex;
`;

const Profile = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const ProfileList = styled.ul`
  margin-left: 25px;

  li:first-child {
    font-size: 13px;
    color: #707070;
    margin-bottom: 5px;
  }
  li:nth-child(2) {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  li:last-child {
    font-size: 15px;
  }
`;
