import styled from 'styled-components';
import { ButtonPropsType } from './type.button';
import { THEME_VALUE } from '../../theme';

export function IconButton(props: ButtonPropsType) {
  const { disabled, type = 'button', children, onClick } = props;
  return (
    <Button onClick={onClick} type={type} disabled={disabled}>
      <Content>{children}</Content>
    </Button>
  );
}
const Content = styled.div`
  display: flex;
`;
const Button = styled.button`
  position: relative;
  background-color: none;
  ${(props) =>
    props.disabled
      ? `opacity:${THEME_VALUE.OPACITY.DISABLE}`
      : `&:hover {
			opacity: ${THEME_VALUE.OPACITY.HOVER};
		  }`};
`;
