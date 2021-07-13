import React from 'react';
import styled from 'styled-components';
import { SectionLayout } from '../../../../lib/elements/layout';
import { BookListItem } from './book-list.item';
import { SecondaryText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR } from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { PrimaryLoader } from '../../../../lib/elements/loader';
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
    <React.Fragment>
      {(isPending || pageLoading) && <PrimaryLoader />}
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
          booksListData.map((company, index) => (
            <BookListItem
              key={index}
              loadDate={company.loadDate}
              bookPeriod={company.bookPeriod}
              companyName={company.companyName}
              bookType={company.bookType}
              kontragentNumber={company.kontragentNumber}
            />
          ))
        )}
      </SectionLayout>
    </React.Fragment>
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
