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
    <List>
      {dataComment.map((data, index) => (
        <CommentItemComponent key={index} data={data} />
      ))}
    </List>
  );
}
const List = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex-grow: 1;
  overflow: auto;
  gap: ${spacing(4)};
  padding-right: ${spacing(6)};
`;
