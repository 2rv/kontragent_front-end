import styled from 'styled-components';
import { SectionLayout } from '../../../../lib/elements/layout';
import { CounterpartiesListItemComponent } from './counterparties-list-item.component';
import { SecondaryText } from '../../../../lib/elements/text';
import { spacing } from '../../../../lib/theme';
import { ReactComponent as QuestionIcon } from '../../../../asset/svg/question-icon.svg';

export function CounterpartiesListComponent(props) {
  const { myCounterpartiesListData } = props;
  return (
    <SectionLayout>
      <Columns>
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
      </Columns>
      {myCounterpartiesListData.map((data, index) => (
        <CounterpartiesListItemComponent key={index} data={data} />
      ))}
    </SectionLayout>
  );
}

const LineCase = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(1)};
`;

const Columns = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 4fr 4fr 3fr 3fr 1fr 2fr 3fr;
  gap: ${spacing(4)};
`;
