import React from 'react';
import styled from 'styled-components';
import { SectionLayout } from '../../../../lib/elements/layout';
import { BookListItemComponent } from './book-list-item.component';
import { SecondaryText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR } from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { ListSkeleton } from '../../../../lib/elements/skeleton';

export function BookListComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    booksListData,
  } = props;
  return (
    <SectionLayout>
      <Columns>
        <SecondaryText tid="BOOK_REVIEW_LIST.TABLE.LOADED" />
        <SecondaryText tid="BOOK_REVIEW_LIST.TABLE.BOOK_PERIOD" />
        <SecondaryText tid="BOOK_REVIEW_LIST.TABLE.YOUR_LEGAL_ENTITY" />
        <SecondaryText tid="BOOK_REVIEW_LIST.TABLE.BOOK_TYPE" />
        <SecondaryText tid="BOOK_REVIEW_LIST.TABLE.COUNTERPARTIES" />
      </Columns>
      <Divider />
      {isPending || pageLoading ? (
        <ListSkeleton />
      ) : (
        booksListData.map((data, index) => (
          <BookListItemComponent key={index} data={data} />
        ))
      )}
    </SectionLayout>
  );
}

const Divider = styled(PrimaryDivider)`
  background-color: ${THEME_COLOR.COLOR.BASE};
`;
const Columns = styled.div`
  display: grid;
  grid-template-columns: 120px 200px 300px 130px auto auto;
  gap: ${spacing(4)};
`;
