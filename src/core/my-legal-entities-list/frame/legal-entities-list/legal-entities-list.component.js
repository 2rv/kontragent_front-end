import styled from 'styled-components';
import { SectionLayout } from '../../../../lib/elements/layout';

import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import {
  THEME_COLOR,
  THEME_SIZE,
  spacing,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { ReactComponent as QuestionIcon } from '../../../../asset/svg/question.svg';
import { BaseList } from '../../../../lib/elements/list';

export function LegalEntitiesListComponent(props) {
  const {
    myLegalEntitiesListData,
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
  } = props;
  return (
    <Container>
      <TableHeaderCase>
        <SecondaryText tid="MY_LEGAL_ENTITIES.LEGAL_ENTITY" />
        <SecondaryText tid="MY_LEGAL_ENTITIES.BOOKS" />
        <SecondaryText tid="MY_LEGAL_ENTITIES.COUNTERPARTIES" />
        <SecondaryText tid="MY_LEGAL_ENTITIES.TURNOVER" />
        <LineCase>
          <SecondaryText tid="MY_LEGAL_ENTITIES.ADDITIONAL_ACCRUAL" />
          <QuestionIcon />
        </LineCase>
        <SecondaryText tid="MY_LEGAL_ENTITIES.RISKS" />
        <SecondaryText tid="MY_LEGAL_ENTITIES.PEOPLES_RATING" />
        <SecondaryText tid="MY_LEGAL_ENTITIES.PENALTIES" />
        <SecondaryText tid="MY_LEGAL_ENTITIES.FINES" />
      </TableHeaderCase>
      <Divider />
      <BaseList
        listData={myLegalEntitiesListData}
        skeletonAction={pageLoading || isPending}
      >
        {(props) => {
          const {
            companyName,
            books,
            kontragent,
            turnover,
            addCharges,
            risks,
            generalRating,
            penalties,
            fines,
            finesNumber,
          } = props;
          return (
            <TableCase>
              <BoldText>{companyName}</BoldText>
              <Text>{books}</Text>
              <Text>{kontragent}</Text>
              <BoldText>
                {turnover} <LightGrayText tid="руб." />
              </BoldText>
              <BoldText>
                {addCharges} <LightGrayText tid="руб." />
              </BoldText>
              <Text>{risks ? risks : 'Нет'}</Text>
              <BoldText>
                {generalRating} <LightGrayText tid="Баллов" />
              </BoldText>
              <BoldText>
                {penalties} <LightGrayText tid="руб." />
              </BoldText>
              <BoldText>
                {fines} <LightGrayText tid="руб." />
                <BoldText>({finesNumber})</BoldText>
              </BoldText>
            </TableCase>
          );
        }}
      </BaseList>
    </Container>
  );
}

const Container = styled(SectionLayout)`
  overflow: auto;
  padding-bottom: ${spacing(6)};
`;
const LineCase = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;
const Divider = styled(PrimaryDivider)`
  background-color: ${THEME_COLOR.COLOR.BASE};
`;
const TableCase = styled.div`
  display: grid;
  grid-template-columns:
    minmax(370px, 9fr) minmax(41px, 1fr) minmax(94px, 2fr) minmax(130px, 3fr)
    minmax(130px, 2.5fr) minmax(41px, 1fr) minmax(140px, 3fr) minmax(70px, 1fr) minmax(120px, 3fr);
  gap: ${spacing(4)};
  align-items: center;
  width: 100%;
`;
const TableHeaderCase = styled(TableCase)`
  /* padding: 0 ${spacing(4)}; */
`;
const Text = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
const LightGrayText = styled(PrimaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const BoldText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
