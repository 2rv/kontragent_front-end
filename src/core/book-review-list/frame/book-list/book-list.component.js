import React from 'react';
import styled from 'styled-components';
import { SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { BaseList } from '../../../../lib/elements/list';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import {
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
  spacing,
} from '../../../../lib/theme';
import { ReactComponent as TrashIcon } from '../../../../asset/svg/trash.svg';
import { ReactComponent as UploadIcon } from '../../../../asset/svg/upload.svg';
import { BasicButton, PrimaryButton } from '../../../../lib/elements/button';

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
    <Container>
      <HeaderTableCase>
        <SecondaryText tid="BOOK_REVIEW_LIST.TABLE.LOADED" />
        <SecondaryText tid="BOOK_REVIEW_LIST.TABLE.BOOK_PERIOD" />
        <SecondaryText tid="BOOK_REVIEW_LIST.TABLE.YOUR_LEGAL_ENTITY" />
        <SecondaryText tid="BOOK_REVIEW_LIST.TABLE.BOOK_TYPE" />
        <SecondaryText tid="BOOK_REVIEW_LIST.TABLE.COUNTERPARTIES" />
      </HeaderTableCase>
      <Divider />
      <BaseList
        listData={booksListData}
        skeletonAction={pageLoading || isPending}
      >
        {({
          loadDate,
          bookPeriod,
          companyName,
          bookType,
          kontragentNumber,
        }) => {
          return (
            <TableCase>
              <Text>{loadDate}</Text>
              <BoldText>{bookPeriod}</BoldText>
              <BoldText>{companyName}</BoldText>
              <Text>{bookType}</Text>
              <BoldText>{kontragentNumber}</BoldText>
              <ActionCase>
                <Button>
                  <TrashIcon />
                </Button>
                <PrimaryButton>
                  <UploadIcon />
                </PrimaryButton>
              </ActionCase>
            </TableCase>
          );
        }}
      </BaseList>
    </Container>
  );
}
const Button = styled(BasicButton)`
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
`;
const Container = styled(SectionLayout)`
  overflow: auto;
  padding-bottom: ${spacing(6)};
`;
const Divider = styled(PrimaryDivider)`
  background-color: ${THEME_COLOR.COLOR.BASE};
`;
const TableCase = styled.div`
  display: grid;
  grid-template-columns: 115px 220px 370px 200px 94px 1fr;
  align-items: center;
  gap: ${spacing(4)};
`;
const HeaderTableCase = styled(TableCase)`
  padding: 0 ${spacing(4)};
`;
const ActionCase = styled.div`
  display: flex;
  grid-template-columns: repeat(2, auto);
  justify-content: flex-end;
  gap: ${spacing(3)};
`;
const Text = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
`;
const BoldText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  line-height: 1.5;
`;
