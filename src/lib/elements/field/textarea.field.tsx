import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { text } from '../../common/text';
import { SecondaryText } from '../text';
import { ErrorMessage } from '../error';
import { TextAreaPropsType } from './type.field';
import { ReactComponent as FileIcon } from 'src/asset/svg/file.svg';
import { ReactComponent as SendIcon } from 'src/asset/svg/send.svg';
import { AutoSize } from './autosize';

export function TextareaField(props: TextAreaPropsType) {
  const {
    onChange,
    onBlur,
    titleTid,
    name,
    placeholderTid,
    error,
    row = 1,
    children,
    isFile,
    isSend,
    minHeight = 56,
  } = props;
  const paddingRight = (() => {
    let PR = 4;
    if (isFile) PR += 5;
    if (isSend) PR += 6;
    return PR;
  })();
  const handleChange = (event: TextAreaPropsType) => {
    AutoSize(event, minHeight);
    onChange && onChange(event);
  };
  return (
    <Container>
      {titleTid && <SecondaryText tid={titleTid} />}
      <RelativeCase>
        <Textarea
          onChange={handleChange}
          placeholder={text(placeholderTid)}
          onBlur={onBlur}
          name={name}
          isError={!!error}
          rows={row}
          iconPadding={paddingRight}
          minHeight={minHeight}
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
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 56px;
  flex: 1;
  gap: ${spacing(2)};
`;
const RelativeCase = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;
const Textarea = styled.textarea`
  min-height: ${(p) => p.minHeight}px;
  height: fit-content;
  flex-grow: 1;
  display: flex;
  line-height: 1.5;
  resize: none;
  padding: ${spacing(4)};
  padding-right: ${(p: TextAreaPropsType) => spacing(p.iconPadding || 4)};
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
