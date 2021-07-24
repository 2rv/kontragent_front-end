import styled from 'styled-components';

import { BasicButton } from '../../../../lib/elements/button';
import { PrimaryBox } from '../../../../lib/elements/box';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';

export function TabsComponent({ tabsList, activeTabId, activeTabHandler }) {
  return (
    <Container>
      {tabsList.map((tab) => (
        <Button
          hasDangerNotices={tab.hasDangerNotices}
          active={tab.id === activeTabId}
          tid={tab.text}
          key={tab.id}
          onClick={() => activeTabHandler(tab)}
        />
      ))}
    </Container>
  );
}

const Container = styled(PrimaryBox)`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;
const Button = styled(BasicButton)`
  color: ${THEME_COLOR.TEXT.SECONDARY};
  min-width: max-content;
  border: 1px solid transparent;
  ${(p) => {
    if (p.active)
      return `
	  border-color: ${THEME_COLOR.COLOR.LIGHT_GREY};
	  color: ${THEME_COLOR.TEXT.PRIMARY}; 
	  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};`;
    if (p.hasDangerNotices) return `color: ${THEME_COLOR.TEXT.VALIDATION};`;
  }};
`;
