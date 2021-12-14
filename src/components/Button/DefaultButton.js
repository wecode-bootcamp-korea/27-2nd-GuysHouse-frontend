import React from 'react';
import styled from 'styled-components';

export default function Button({
  backgroundColor,
  color,
  src,
  width,
  height,
  buttonName,
  LogoutKakao,
}) {
  return (
    <DefaultButton
      backgroundColor={backgroundColor}
      color={color}
      width={width}
      height={height}
      onClick={LogoutKakao}
    >
      <DefaultButtonLogo src={src} alt={buttonName} />
      {buttonName}
    </DefaultButton>
  );
}

const DefaultButton = styled.button(
  ({ width, height, color, backgroundColor }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: ${width};
  height: ${height};
  border-radius: 4px;
  color: ${color};
  background: ${backgroundColor};
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
`
);

const DefaultButtonLogo = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 10px;
`;
