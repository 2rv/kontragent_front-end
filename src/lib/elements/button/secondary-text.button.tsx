import styled from 'styled-components';
import { ButtonPropsType } from './type.button';
import { THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { text } from '../../common/text';

export function SecondaryTextButton(props: ButtonPropsType) {
  const { onClick, tid, disabled, type = 'button' } = props;

  return (
    <Button onClick={onClick} type={type} disabled={disabled}>
      {text(tid)}
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  background-color: none;
  color: ${THEME_COLOR.TEXT.SECONDARY};
  font-size: ${THEME_SIZE.FONT.SMALL};
  transition: 0.1s;
  :hover {
    color: ${THEME_COLOR.TEXT.PRIMARY};
    font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  }
  ${(p) => p.disabled && `opacity:${THEME_VALUE.OPACITY.DISABLE}`};
`;
