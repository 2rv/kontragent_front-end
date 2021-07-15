import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';

import { text } from '../../common/text';

import { SecondaryText } from '../text';
import { ErrorMessage } from '../error';

import { TextAreaPropsType } from './type.field';

export function TextareaField(props: TextAreaPropsType) {
  const {
    onChange,
    onBlur,
    titleTid,
    name,
    placeholderTid,
    error,
    row = 3,
    children,
  } = props;
  return (
    <Container>
      {titleTid && <SecondaryText tid={titleTid} />}
      <RelativeCase>
        <Textarea
          placeholder={text(placeholderTid)}
          onBlur={onBlur}
          onChange={onChange}
          name={name}
          isError={!!error}
          rows={row}
        />
        {children}
      </RelativeCase>
      {error && <ErrorMessage error={error} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  gap: ${spacing(2)};
  width: 100%;
`;
const RelativeCase = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  height: inherit;
`;
const Textarea = styled.textarea`
  width: 100%;
  height: auto;
  resize: none;
  padding: ${spacing(4)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.PRIMARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.REGULAR};
  border: ${(props: { isError: boolean }) =>
    props.isError
      ? `1px solid ${THEME_COLOR.COLOR.VALIDATION}`
      : '1px solid transparent'};

  background: ${(props) =>
    !props.isError ? THEME_COLOR.COLOR.SECONDARY : THEME_COLOR.COLOR.BASE};

  &:focus {
    border: 1px solid #b5b5b5;
    opacity: 1;
  }
  &:hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
  overflow: hidden;
`;
