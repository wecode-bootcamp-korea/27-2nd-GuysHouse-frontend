import style from 'styled-components';
import React, { useState } from 'react';

const MAX_ROW = 20;
const TEXTAREA_LINEHEIGHT = 16;

export default function TextArea({
  id,
  context,
  checkbox,
  answers,
  setAnswers,
}) {
  const [textHeight, setTextHeight] = useState(5);

  const changeInput = event => {
    const { name, value } = event.target;
    const currentRows = ~~(event.target.scrollHeight / TEXTAREA_LINEHEIGHT);
    const previousRows = event.target.rows;

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    if (currentRows >= MAX_ROW) {
      event.target.rows = MAX_ROW;
    }

    setTextHeight(currentRows < MAX_ROW ? currentRows : MAX_ROW);

    setAnswers({
      ...answers,
      [name]: value,
    });
  };

  return (
    <>
      <Text>{context}</Text>
      <InputArea
        onChange={changeInput}
        name={`answer${id}`}
        rows={textHeight}
      />
      <InputMeta>
        <div>
          <CheckBox type="checkbox" active={checkbox} />
          <CheckBoxText active={checkbox}>
            마이페이지의 프로필 내용으로 대체하기
          </CheckBoxText>
        </div>
        <TextLength>
          ({answers[Object.keys(answers)[id - 1]]?.length}/1000)
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
