import styled from 'styled-components';
import { SectionLayout } from '../../../../lib/elements/layout';
import { LegalEntitiesListItem } from './legal-entities-list.item';
import { SecondaryText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR } from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { ReactComponent as QuestionIcon } from '../../../../asset/svg/question-icon.svg';

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
    <SectionLayout>
      <Columns>
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
      </Columns>
      <Divider />
      {myLegalEntitiesListData.map((data, index) => (
        <LegalEntitiesListItem key={index} data={data} />
      ))}
    </SectionLayout>
  );
}

const LineCase = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(1)};
`;

const Divider = styled(PrimaryDivider)`
  background-color: ${THEME_COLOR.COLOR.BASE};
`;

const Columns = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 6fr 2fr 2fr 5fr 3fr 1fr 3fr 2fr 3fr;
  gap: ${spacing(4)};
`;
