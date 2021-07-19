import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { text } from '../../common/text';
import { SecondaryText } from '../text';
import { ErrorMessage } from '../error';
import { TextAreaPropsType } from './type.field';
import { ReactComponent as FileIcon } from 'src/asset/svg/file.svg';
import { ReactComponent as SendIcon } from 'src/asset/svg/send.svg';

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
    isFile,
    isSend,
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
        <ActionCase>
          {isFile && <FileIcon />}
          {isSend && <SendIcon />}
        </ActionCase>
        {children}
      </RelativeCase>
      {error && <ErrorMessage error={error} />}
    </Container>
  );
}
const ActionCase = styled.div`
  position: absolute;
  display: flex;
  top: ${spacing(4)};
  right: ${spacing(4)};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 56px;
  gap: ${spacing(2)};
`;
const RelativeCase = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;
const Textarea = styled.textarea`
  min-height: 56px;
  /* width: 100%; */
  flex-grow: 1;
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
