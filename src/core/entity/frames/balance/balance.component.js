import styled from 'styled-components';

import { CompanySpendingHistoryComponent } from './frame/company-spending-history';
import { HeaderComponent } from '../header';
import { COMPANY_SPENDING_HISTORY_LIST } from './balance.constant';

import { PrimaryBox } from '../../../../lib/elements/box';
import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';
import { PrimaryButton } from '../../../../lib/elements/button';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';

export function BalanceComponent() {
  return (
    <>
      <PrimaryBox>
        <IndentLayout>
          <SectionLayout>
            <HeaderComponent
              title="ENTITY.BALANCE.HEADER.TITLE"
              companyType="ENTITY.BALANCE.HEADER.COMPANY_TYPE"
              companyName={'"Компания Гермес-Электро"'}
            >
              <Content>
                <Layout type="STANDART">
                  <SecondaryText tid="ENTITY.BALANCE.HEADER.CURRENT_BALANCE" />
                  <AccentPriceText tid="310 000.00 руб." />
                </Layout>
                <Layout type="STANDART">
                  <SecondaryText tid="ENTITY.BALANCE.HEADER.SPENT_IN_A_MONTH" />
                  <BoldPriceText tid="25 000.00 руб." />
                </Layout>
                <PrimaryButton tid="ENTITY.BALANCE.HEADER.TOP_UP_BALANCE" />
              </Content>
            </HeaderComponent>
          </SectionLayout>
        </IndentLayout>
      </PrimaryBox>
      <PrimaryBox>
        <IndentLayout>
          <SectionLayout>
            <CompanySpendingHistoryComponent companySpendingHistoryList={COMPANY_SPENDING_HISTORY_LIST} />
          </SectionLayout>
        </IndentLayout>
      </PrimaryBox>
    </>
  );
}

const Content = styled.div`
  display: grid;
  grid-template-columns: 212px 212px 212px;
  gap: 24px;
`;

const Layout = styled(IndentLayout)`
  display: flex;
  align-items: center;
  flex-direction: column;
  line-height: 25px;
  border-radius: 10px;
  background: ${THEME_COLOR.COLOR.SECONDARY};
`;

const BoldPriceText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  font-size: ${THEME_SIZE.FONT.STANDART};
`;

const AccentPriceText = styled(BoldPriceText)`
  color: ${THEME_COLOR.TEXT.ACCENT};
`;
