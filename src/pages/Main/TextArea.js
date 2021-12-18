import style from 'styled-components';
import React, { useState } from 'react';

export default function TextArea({ id, necessary, text, checkbox }) {
  const [textHeight, setTextHeight] = useState({
    rows: 5,
    minRows: 5,
    maxRows: 20,
  });

  const [answers, setAnswers] = useState({
    questions1: '',
    questions2: '',
    questions3: '',
    questions4: '',
  });

  const changeInput = event => {
    const { name, value } = event.target;
    const textareaLineHeight = 16;
    const { minRows, maxRows } = textHeight;
    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    const previousRows = event.target.rows;

    event.target.rows = minRows;

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
    }

    setTextHeight({
      rows: currentRows < maxRows ? currentRows : maxRows,
      minRows: 5,
      maxRows: 20,
    });

    setAnswers({
      ...answers,
      [name]: value,
    });
  };

  return (
    <>
      <Text>
        {necessary} {text}
      </Text>
      <InputArea
        onChange={changeInput}
        name={`questions${id + 1}`}
        rows={textHeight.rows}
      />
      <InputMeta>
        <div>
          <CheckBox type="checkbox" active={checkbox} />
          <CheckBoxText active={checkbox}>
            마이페이지의 프로필 내용으로 대체하기
          </CheckBoxText>
        </div>
        <TextLength>
          ({answers[Object.keys(answers)[id]].length}/1000)
        </TextLength>
      </InputMeta>
    </>
  );
}

const Text = style.span`
  font-size: 14px;
`;
const InputArea = style.textarea`
  border-color: lightgray;
  border-radius: 4px;
  margin: 10px 0;
`;
const InputMeta = style.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => (props.active ? '0px' : '50px')};
`;
const CheckBox = style.input`
  border-color: lightgray;
  border-radius: 4px;
  margin-right: 10px;
  visibility: ${props => (props.active ? null : 'hidden')};
`;
const CheckBoxText = style.span`
  visibility: ${props => (props.active ? null : 'hidden')};
  font-size: 14px;
`;
const TextLength = style.span`
  display: flex;
  justify-content: end;
`;
