import styled from 'styled-components';
import { SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import {
  THEME_VALUE,
  THEME_COLOR,
  THEME_SIZE,
  spacing,
} from '../../../../lib/theme';
import { ReactComponent as QuestionIcon } from '../../../../asset/svg/question.svg';
import { ReactComponent as CheckIcon } from '../../../../asset/svg/check.svg';
import { BaseList } from '../../../../lib/elements/list';
import { Rating } from '../../../../lib/elements/stars-rating';

export function CounterpartiesListComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    myCounterpartiesListData,
  } = props;
  return (
    <Container>
      <TableHeaderCase>
        <SecondaryText tid="MY_COUNTERPARTIES_LIST.VERIFICATION" />
        <SecondaryText tid="MY_COUNTERPARTIES_LIST.COUNTERPARTY" />
        <SecondaryText tid="MY_COUNTERPARTIES_LIST.YOUR_LEGAL_ENTITY" />
        <SecondaryText tid="MY_COUNTERPARTIES_LIST.TURNOVER" />
        <LineCase>
          <SecondaryText tid="MY_COUNTERPARTIES_LIST.ADDITIONAL_ACCRUAL" />
          <QuestionIcon />
        </LineCase>
        <SecondaryText tid="MY_COUNTERPARTIES_LIST.RISKS" />
        <SecondaryText tid="MY_COUNTERPARTIES_LIST.YOUR_ASSESSING" />
        <SecondaryText tid="MY_COUNTERPARTIES_LIST.PEOPLES_RATING" />
      </TableHeaderCase>
      <BaseList
        listData={myCounterpartiesListData}
        skeletonAction={pageLoading || isPending}
      >
        {({
          approved,
          company,
          userCompany,
          turnover,
          addCharges,
          risks,
          userRating,
          generalRating,
        }) => {
          return (
            <TableCase>
              <Verify approved={approved ? 1 : 0}>
                {approved && <CheckIcon />}
              </Verify>
              <MediumText>{company}</MediumText>
              <MediumText>{userCompany}</MediumText>
              <MediumText>
                {turnover} <Text> руб.</Text>
              </MediumText>
              <MediumText>
                {addCharges} <Text> руб.</Text>
              </MediumText>
              <Text>{risks ? risks : 'Нет'}</Text>
              <Rating value={userRating} />
              <PrimaryText>
                {generalRating} <Text> Баллов</Text>
              </PrimaryText>
            </TableCase>
          );
        }}
      </BaseList>
    </Container>
  );
}

const Verify = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) =>
    p.approved ? THEME_COLOR.TEXT.PRIMARY : THEME_COLOR.COLOR.SECONDARY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  margin-left: ${spacing(4)};
`;
const Text = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  line-height: 1.5;
`;
const MediumText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
`;
const LineCase = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(1)};
`;
const TableCase = styled.div`
  display: grid;
  grid-template-columns: 67px 370px 270px 150px 130px 41px 100px 140px;
  gap: ${spacing(4)};
  align-items: center;
`;
const TableHeaderCase = styled(TableCase)`
  padding: 0 ${spacing(4)};
`;
const Container = styled(SectionLayout)`
  overflow: auto;
  padding-bottom: ${spacing(6)};
`;
