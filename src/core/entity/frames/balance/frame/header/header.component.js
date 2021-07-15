import styled from 'styled-components';

import { IndentLayout } from '../../../../../../lib/elements/layout';
import { PrimaryButton } from '../../../../../../lib/elements/button';
import { PrimaryText, SecondaryText } from '../../../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../../../../../lib/theme';

export function HeaderComponent() {
  return (
    <HeaderContainer>
      <CompanyBalanceTitle tid="Баланс Компании" />
      <div>
        <SecondaryText>Общество с ограниченной ответственностью</SecondaryText>
        &nbsp;
        <CompanyName>"Компания Гермес-Электро"</CompanyName>
      </div>
      <Content>
        <Layout type="STANDART">
          <SecondaryText tid="Текущий баланс" />
          <AccentPriceText tid="310 000.00 руб." />
        </Layout>
        <Layout type="STANDART">
          <SecondaryText tid="Потрачено за месяц" />
          <BoldPriceText tid="25 000.00 руб." />
        </Layout>
        <PrimaryButton tid="Пополнить баланс" />
      </Content>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;

const CompanyBalanceTitle = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const CompanyName = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

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
