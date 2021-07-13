import styled from 'styled-components';

import { SecondaryText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';
import { spacing, THEME_COLOR } from '../../../../lib/theme';

export function TabsComponent({ tabsList }) {
  return (
    <Box>
      <TabsItemContainer>
        {tabsList.map((tab) => (
          <TabsItemContent key={tab.id} active={tab.active}>
            <SecondaryText tid={tab.text} />
          </TabsItemContent>
        ))}
      </TabsItemContainer>
    </Box>
  );
}

const Box = styled(PrimaryBox)`
  height: 46px;
  margin: ${spacing(7)} 0;
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
      color: ${THEME_COLOR.COLOR.VALIDATION};
    }
  `};
`;
