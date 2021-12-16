import React from 'react';
import styled from 'styled-components';

export default function InputBox({
  type,
  placeholder,
  value,
  name,
  title,
  onChange,
}) {
  return (
    <div>
      <InputTitle>{title}</InputTitle>
      <Input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  );
}

const InputTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  margin: 20px 0 14px 0;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 13px;
  border: 1px solid #8e8e8e;
  border-radius: 2px;
  background-color: white;
`;
