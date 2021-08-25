import styled from 'styled-components';
import { ButtonPropsType } from './type.button';
import { THEME_SIZE, THEME_VALUE, THEME_COLOR, spacing } from '../../theme';
import { text } from '../../common/text';

export function BasicButton(props: ButtonPropsType) {
  const {
    tid,
    disabled,
    type = 'submit',
    className,
    children,
    onClick,
  } = props;

  return (
    <Button
      onClick={onClick}
      type={type}
      className={className}
      disabled={disabled}
    >
      {children ? children : text(tid)}
    </Button>
  );
}

const Button = styled.button`
  background-color: none;
  width: 100%;
  min-height: 46px;
  padding: 0 ${spacing(4)};
  height: 46px;
  display: flex;
  flex: 1 0;
  align-items: center;
  justify-content: center;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  color: ${THEME_COLOR.TEXT.BASE};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  ${(props) =>
    props.disabled
      ? `opacity:${THEME_VALUE.OPACITY.DISABLE}`
      : `&:hover {
			opacity: ${THEME_VALUE.OPACITY.HOVER};
		  }`};
`;
