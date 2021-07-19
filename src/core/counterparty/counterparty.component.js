import React from 'react';
import styled from 'styled-components';

import { TabsComponent } from './frames/tabs';

import { PrimaryTitleText } from '../../lib/elements/text';
import { spacing, THEME_SIZE } from '../../lib/theme';

export function CounterpartyComponent(props) {
  const { tabsList, tabsComponentList, activeTabId, activeTabHandler } = props;

  return (
    <Container>
      <CounterpartyText tid="COUNTERPARTY.TITLE" />
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
  gap: ${spacing(6)};
  flex-grow: 1;
  min-height: 0;
`;

const CounterpartyText = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
