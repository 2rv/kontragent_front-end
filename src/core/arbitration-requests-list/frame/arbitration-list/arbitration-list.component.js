import React from 'react';
import styled from 'styled-components';
import { ArbitrationListItemComponent } from './arbitration-list-item.component';
import { spacing } from '../../../../lib/theme';
import { PrimaryLoader } from '../../../../lib/elements/loader';

export function ArbitrationListComponent(props) {
  const {
    arbitrationListData,
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
  } = props;

  return (
    <React.Fragment>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container>
        {arbitrationListData.map((data, index) => (
          <ArbitrationListItemComponent data={data} key={index} />
        ))}
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};
`;
