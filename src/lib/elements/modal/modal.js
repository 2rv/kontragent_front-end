import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from 'src/lib/theme';
import styled, { keyframes } from 'styled-components';
import { PrimaryBox } from '../box';
import { IndentLayout } from '../layout';

export function ModalPopup(props) {
  const { close, isOpen, children } = props;
  if (!isOpen) return null;
  return (
    <Container isOpen={isOpen} onClick={close}>
      <Content onClick={(e) => e.stopPropagation()}>{children}</Content>
    </Container>
  );
}

const animation = keyframes`
  0% {
	opacity: 0;
  }	
  100% {
    opacity: 1;
  }
`;
const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  animation: ${animation} 0.2s;
  display: ${(p) => (p.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${THEME_COLOR.COLOR.BASE};
  padding: ${spacing(8)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
