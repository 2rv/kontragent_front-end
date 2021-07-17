import styled from 'styled-components';
import { SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import {
  THEME_VALUE,
  THEME_COLOR,
  THEME_SIZE,
  spacing,
} from '../../../../lib/theme';
import { ReactComponent as QuestionIcon } from '../../../../asset/svg/question-icon.svg';
import { ReactComponent as ApprovedCompanyIcon } from '../../../../asset/svg/approvedCompanyIcon.svg';
import { ReactComponent as IconStar } from '../../../../asset/svg/star-icon.svg';
import { BaseList } from '../../../../lib/elements/list';

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
              <CheckCase>
                {approved ? <ApprovedCompanyIcon /> : <NotApproved />}
              </CheckCase>
              <MediumText>{company}</MediumText>
              <MediumText>{userCompany}</MediumText>
              <MediumText>
                {turnover} <Text> руб.</Text>
              </MediumText>
              <MediumText>
                {addCharges} <Text> руб.</Text>
              </MediumText>
              <Text>{risks ? risks : 'Нет'}</Text>
              <LineCase>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <StarIcon key={index} fullStar={userRating >= item} />
                ))}
              </LineCase>
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

const Text = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  line-height: 1.5;
`;
const MediumText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
`;

const NotApproved = styled.div`
  width: 30px;
  height: 30px;
  background-color: #f3f3f3;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const StarIcon = styled(IconStar)`
  fill: ${({ fullStar }) =>
    fullStar ? THEME_COLOR.TEXT.WARNING : THEME_COLOR.COLOR.LIGHT_GREY};
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
const CheckCase = styled.div`
  padding-left: ${spacing(4)};
`;
