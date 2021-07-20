import styled from 'styled-components';

import { SecondaryText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';

export function TabsComponent({ tabsList, activeTabId, activeTabHandler }) {
  return (
    <PrimaryBox>
      <TabsItemContainer>
        {(tabsList[tabsList.length - 1].hasDangerNotices
          ? tabsList
          : tabsList.slice(0, -1)
        ).map((tab) => (
          <TabsItemContent
            key={tab.id}
            active={tab.id === activeTabId}
            onClick={() => activeTabHandler(tab)}
          >
            <TextTab
              hasDangerNotices={tab.hasDangerNotices}
              active={tab.id === activeTabId}
              tid={tab.text}
            />
          </TabsItemContent>
        ))}
      </TabsItemContainer>
    </PrimaryBox>
  );
}

const TabsItemContainer = styled.div`
  display: flex;
  align-items: center;
`;
const TabsItemContent = styled.div`
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  min-width: 120px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  height: 46px;
  border: 1px solid transparent;
  ${(p) => p.active && ` border-color: ${THEME_COLOR.COLOR.LIGHT_GREY};`};
`;
const TextTab = styled(SecondaryText)`
  ${(p) => {
    if (p.active)
      return `
	  color: ${THEME_COLOR.TEXT.PRIMARY}; 
	  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};`;
    if (p.hasDangerNotices) return `color: ${THEME_COLOR.TEXT.VALIDATION};`;
  }}
`;
