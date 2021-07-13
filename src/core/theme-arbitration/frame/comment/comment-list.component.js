import React from 'react';
import styled from 'styled-components';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { CommentItemComponent } from './comment-item.component';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { PrimaryLoader } from '../../../../lib/elements/loader';
import { ListSkeleton } from '../../../../lib/elements/skeleton';

export function CommentListComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    dataComment,
  } = props;
  return (
    <React.Fragment>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container>
        {isPending || pageLoading ? (
          <ListSkeleton />
        ) : (
          dataComment.map((item, index) => (
          <CommentItemComponent key={item?.id || index} {...item} />
        )))}
      </Container>
    </React.Fragment>
  );
}
const Container = styled.div`
  display: flex;
  gap: ${spacing(4)};
  align-items: flex-start;
  flex-direction: column;
`;
