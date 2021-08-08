import React, { useEffect, useState } from 'react';
import { THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import styled, { keyframes } from 'styled-components';

export const Popover = (props) => {
  const { children, anchorEl = null, onClose, dense = false } = props;
  if (!anchorEl) return null;

  const elementRef = React.createRef();

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const parent = anchorEl?.getBoundingClientRect();
    const element = elementRef.current.getBoundingClientRect();
    const x = parent?.left - element.width;
    const y = parent?.top + (parent?.height || 0);
    anchorEl && setPosition({ x, y });
  }, [anchorEl]); // отслеживание изменения привязанного элемента

  //   const actionClose = (fn, ...args) => {  хочется сделать функцию которую будет принимать children для закрытия модалки
  //     fn(args);
  //     onClose();
  //   };
  return (
    <Container open={!!anchorEl} onClick={onClose}>
      <Content
        xPos={position.x}
        yPos={position.y}
        ref={elementRef}
        dense={dense}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Content>
    </Container>
  );
};
const animation = keyframes`
  0% {
	opacity: 0;
  }	
  100% {
    opacity: 1;
  }
`;

const Content = styled.div`
  position: absolute;
  top: ${(p) => p.yPos + 'px'};
  left: ${(p) => p.xPos + 'px'};
  box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.2);
  display: flex;
  min-width: 255px;
  background-color: ${THEME_COLOR.COLOR.BASE};
  ${(p) => !p.dense && `padding: ${THEME_SIZE.INDENT.STANDART};`}
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  animation: ${animation} 0.2s;
`;

const Container = styled.div`
  position: fixed;
  display: ${(p) => (p.open ? 'block' : 'none')};
  top: 0;
  z-index: 9;
  left: 0;
  right: 0;
  bottom: 0;
`;

// Модалка закрывает кнопку
// const x = parent?.left - element.width + (parent?.width || 0);
// const y = parent?.top;
// Модалка с лева снизу от кнопки
// const x = parent?.left - element.width;
// const y = parent?.top + (parent?.height || 0);

const RelativeToElement = (left, right, top, bottom) => {
  const position = { left: 0, right: 0, top: 0, bottom: 0 };
  if (left) {
  }

  return position;
};
