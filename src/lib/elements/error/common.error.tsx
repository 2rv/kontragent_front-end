import Image from 'next/image';

import { FormErrorPropsType } from './type.error';

import styled from 'styled-components';
import { THEME_COLOR, THEME_VALUE, THEME_SIZE } from '../../theme';
import { spacing } from '../../theme';

import { text } from '../../common/text';

export function CommonError(props: FormErrorPropsType) {
  const { tid, className, compoundTid } = props;
  return (
    <Error className={className}>
      <Image src="/static/img/error.svg" width={16} height={16} />

      <ErrorMessageLayout>
        {compoundTid && (
          <ErrorFirstPart>
            {text(compoundTid, 'Неизвестная ошибка.')}
          </ErrorFirstPart>
        )}

        <ErrorSecondPart>{text(tid, 'Неизвестная ошибка.')}</ErrorSecondPart>
      </ErrorMessageLayout>
    </Error>
  );
}

const ErrorMessageLayout = styled.div`
  margin-left: ${spacing(2)};
`;

const ErrorFirstPart = styled.span`
  color: ${THEME_COLOR.TEXT.ERROR};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  font-size: ${THEME_SIZE.FONT.SMALL};
`;

const ErrorSecondPart = styled.span`
  color: ${THEME_COLOR.TEXT.ERROR};
  font-size: ${THEME_SIZE.FONT.SMALL};
`;

const Error = styled.div`
  display: flex;
  align-items: center;
  background-color: ${THEME_COLOR.COLOR.ERROR};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  padding: ${spacing(3)};
  line-height: 1.5;
`;
