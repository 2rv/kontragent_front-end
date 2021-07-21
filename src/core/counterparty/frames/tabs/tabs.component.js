import styled from 'styled-components';

import { PrimaryButton } from '../../../../lib/elements/button';
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
      {(tabsList[tabsList.length - 1].hasDangerNotices
        ? tabsList
        : tabsList.slice(0, -1)
      ).map((tab) => (
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
  gap: ${spacing(2)};
`;
const Button = styled(PrimaryButton)`
  height: 44px;
  color: ${THEME_COLOR.TEXT.SECONDARY};
  background-color: transparent;
  box-sizing: border-box;
  padding: 0 ${spacing(4)};
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  ${(p) => {
    if (p.active)
      return `
	  border-color: ${THEME_COLOR.COLOR.LIGHT_GREY};
	  color: ${THEME_COLOR.TEXT.PRIMARY}; 
	  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};`;
    if (p.hasDangerNotices) return `color: ${THEME_COLOR.TEXT.VALIDATION};`;
  }}
`;
