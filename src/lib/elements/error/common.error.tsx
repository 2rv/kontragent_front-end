import Image from 'next/image';

import { FormErrorPropsType } from './type.error';

import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE } from '../../theme';
import { spacing } from '../../theme';

import { text } from '../../common/text';

export function CommonError(props: FormErrorPropsType) {
  const { tid, className, tvalue } = props;
  return (
    <Error className={className}>
      <Image src="/static/img/error.svg" width={16} height={16} />
      <ErrorMessage>{text(tid, tvalue)}</ErrorMessage>
    </Error>
  );
}

const ErrorMessage = styled.span`
  color: ${THEME_COLOR.TEXT.ERROR};
  font-size: ${THEME_SIZE.FONT.SMALL};
  margin-left: ${spacing(2)};
`;

const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${THEME_COLOR.COLOR.ERROR};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  padding: ${spacing(4)};
  line-height: 1.5;
`;
