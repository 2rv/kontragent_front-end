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
    <Container>
      {dataComment.map((item, index) => (
        <CommentItemComponent key={item?.id || index} {...item} />
      ))}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
  gap: ${spacing(4)};
  padding-right: ${spacing(6)};
`;
