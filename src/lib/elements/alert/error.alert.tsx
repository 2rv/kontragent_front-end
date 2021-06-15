import { AlertPropsType } from './type.alert';

import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE } from '../../theme';
import { spacing } from '../../theme';

import { ReactComponent as AlertIcon } from '../../../asset/svg/alert.svg';

import { text } from '../../common/text';

export function ErrorAlert(props: AlertPropsType) {
  const { tid, className, tvalue } = props;
  return (
    <Alert className={className}>
      <Icon />
      <Message>{text(tid, tvalue)}</Message>
    </Alert>
  );
}

const Icon = styled(AlertIcon)`
  fill: ${THEME_COLOR.TEXT.ERROR};
  flex-shrink: 0;
`;

const Message = styled.span`
  color: ${THEME_COLOR.TEXT.ERROR};
  font-size: ${THEME_SIZE.FONT.SMALL};
  margin-left: ${spacing(2)};
`;

const Alert = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${THEME_COLOR.COLOR.ERROR};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  padding: ${spacing(4)};
  line-height: 1.5;
`;
