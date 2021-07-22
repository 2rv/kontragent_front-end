import styled from 'styled-components';
import { HeaderComponent } from '../header';
import { PrimaryBox } from '../../../../lib/elements/box';
import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';
import { PrimaryButton } from '../../../../lib/elements/button';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { BalanceHistoryListComponent } from './balance-history-list.component';

export function BalanceComponent(props) {
  const { balanceHistoryListData } = props;
  return (
    <Container>
      <PrimaryBox>
        <IndentLayout>
          <SectionLayout>
            <HeaderComponent
              title="ENTITY.BALANCE.HEADER.TITLE"
              companyType="ENTITY.BALANCE.HEADER.COMPANY_TYPE"
              companyName={'"Компания Гермес-Электро"'}
            />
            <HeaderContent>
              <CaseCard type="LARGE">
                <SecondaryText tid="ENTITY.BALANCE.HEADER.CURRENT_BALANCE" />
                <BlueText tid="310 000.00 руб." />
              </CaseCard>
              <CaseCard type="LARGE">
                <SecondaryText tid="ENTITY.BALANCE.HEADER.SPENT_IN_A_MONTH" />
                <BoldPriceText tid="25 000.00 руб." />
              </CaseCard>
              <PrimaryButton tid="ENTITY.BALANCE.HEADER.TOP_UP_BALANCE" />
            </HeaderContent>
          </SectionLayout>
        </IndentLayout>
      </PrimaryBox>
      <BalanceHistoryListComponent
        balanceHistoryListData={balanceHistoryListData}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${spacing(8)};
`;
const HeaderContent = styled(SectionLayout)`
  grid-template-columns: 212px 212px 212px;
`;

const CaseCard = styled(IndentLayout)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 102px;
  gap: ${spacing(3)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background: ${THEME_COLOR.COLOR.SECONDARY};
`;

const BoldPriceText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;

const BlueText = styled(PrimaryText)`
  color: ${THEME_COLOR.TEXT.ACCENT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
