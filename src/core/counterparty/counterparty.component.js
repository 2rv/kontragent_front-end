import React from 'react';
import styled from 'styled-components';

import { TabsComponent } from './frames/tabs';

import { PrimaryTitleText } from '../../lib/elements/text';
import { spacing, THEME_SIZE } from '../../lib/theme';

export function CounterpartyComponent(props) {
  const { tabsList, tabsComponentList, activeTabId, activeTabHandler } = props;

  return (
    <Container>
      <Title tid="COUNTERPARTY.TITLE" />
      <TabsComponent
        tabsList={tabsList}
        activeTabId={activeTabId}
        activeTabHandler={activeTabHandler}
      />
      {tabsComponentList.map(
        (component) =>
          component.id === activeTabId && (
            <React.Fragment key={component.id}>
              {component.component}
            </React.Fragment>
          ),
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: fit-content;
  flex-grow: 1;
  gap: ${spacing(6)};
`;

const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
