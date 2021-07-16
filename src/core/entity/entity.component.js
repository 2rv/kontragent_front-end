import React from 'react';
import styled from 'styled-components';

import { TabsComponent } from './frames/tabs';

import { PrimaryLoader } from '../../lib/elements/loader';
import { PrimaryTitleText } from '../../lib/elements/text';
import { spacing, THEME_SIZE } from '../../lib/theme';

export function EntityComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    tabsList,
    tabsComponentList,
    activeTabId,
    activeTabHandler,
  } = props;

  return (
    <React.Fragment>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container>
        <EntityText tid="ENTITY.TITLE" />
        <TabsComponent tabsList={tabsList} activeTabId={activeTabId} activeTabHandler={activeTabHandler} />
        {tabsComponentList.map((component) => {
          if (component.id === activeTabId) {
            return <React.Fragment key={component.id}>{component.component}</React.Fragment>;
          }
        })}
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(5)};
  width: 100%;
`;

const EntityText = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
