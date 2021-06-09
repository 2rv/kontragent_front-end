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
  } = props;
  return (
    <Container>
      <Title tid={titleTid} />
      <Textarea
        placeholder={text(placeholderTid)}
        onBlur={onBlur}
        onChange={onChange}
        name={name}
        isError={!!error}
        rows={row}
      />
      {error && <InputError error={error} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title: typeof SecondaryText = styled(SecondaryText)`
  margin-bottom: ${spacing(2)};
`;

const InputError: typeof ErrorMessage = styled(ErrorMessage)`
  margin-top: ${spacing(1)};
`;

const Textarea = styled.textarea`
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
`;
