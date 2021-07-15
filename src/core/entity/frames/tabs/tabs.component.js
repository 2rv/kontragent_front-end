import styled from 'styled-components';

import { SecondaryText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';
import { spacing, THEME_COLOR, THEME_VALUE } from '../../../../lib/theme';

export function TabsComponent({ tabsList, activeTabId, activeTabHandler }) {
  return (
    <Container>
      <TabsItemContainer>
        {tabsList.map((tab) => (
          <TabsItemContent
            key={tab.id}
            active={tab.id === activeTabId}
            hasDangerNotices={tab.hasDangerNotices}
            onClick={() => activeTabHandler(tab)}
          >
            <SecondaryText tid={tab.text} />
          </TabsItemContent>
        ))}
      </TabsItemContainer>
    </Container>
  );
}

const Container = styled(PrimaryBox)`
  height: 46px;
`;

const TabsItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: ${spacing(8)};
  margin: 0 ${spacing(4)};
`;

const TabsItemContent = styled.div`
  cursor: pointer;
  ${(props) => props.active && `
    display: flex;
    align-items: center;
    border: 1px solid ${THEME_COLOR.COLOR.LIGHT_GREY};
    border-radius: 10px;
    padding: ${spacing(4)};
    margin: 0 -${spacing(4)};
    span {
      color: ${THEME_COLOR.TEXT.PRIMARY};
      font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM}
    }
  `};
`;
