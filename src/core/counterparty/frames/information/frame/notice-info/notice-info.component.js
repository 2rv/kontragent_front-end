import styled from 'styled-components';

import { PrimaryBox } from '../../../../../../lib/elements/box';
import {
  IndentLayout,
  SectionLayout,
} from '../../../../../../lib/elements/layout';
import {
  SecondaryText,
  PrimaryText,
} from '../../../../../../lib/elements/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../../../lib/theme';
import { PrimaryLink } from '../../../../../../lib/elements/link';

export function NoticeInfoComponent() {
  return (
    <PrimaryBox>
      <IndentLayout>
        <Container>
          <Content>
            <Column>
              <Secondary>Состояние</Secondary>
              <Primary tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.ACTING" />
            </Column>
            <Column>
              <Secondary tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.DATE_OF_INFORMATION" />
              <Primary>2011-10-19</Primary>
            </Column>
            <Column>
              <Secondary tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.TELEPHONE" />
              <Primary>
                <Primary>8 (926) 435-34-77</Primary>,
                <Primary>8 (499) 792-25-93</Primary>,
                <Primary>8 (916) 562-97-83</Primary>
              </Primary>
            </Column>
            <Column>
              <Secondary tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.AUTHORIZED_CAPITAL" />
              <Primary>20 000 руб.</Primary>
              <Light>2011-10-19</Light>
            </Column>
            <Column>
              <Primary>Жуков Олег Юрьевич</Primary>
              <Primary>10 000 руб. - 50%</Primary>
              <Light>2011-12-15</Light>
            </Column>
            <Column>
              <Secondary tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.EXECUTION_PROCEEDINGS" />
              <Primary tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.NO_ENFORCEMENT_PROCEEDINGS_FOUND" />
            </Column>
            <Column>
              <Secondary tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.EXTRACT_FROM_USRLE" />
              <Line>
                <LinkText tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.TO_FORM" />
                <Primary tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.IN_TODAYS_DATE" />
              </Line>
            </Column>
          </Content>
          <Content>
            <Column>
              <Line>
                <Secondary>ИНН</Secondary>
                <Primary>7729693780</Primary>
              </Line>
              <Line>
                <Secondary>КПП</Secondary>
                <Primary>772901001</Primary>
              </Line>
              <Line>
                <Secondary>ОГРН</Secondary>
                <Primary>1117746830134</Primary>
              </Line>
              <Line>
                <Secondary>ОКПО</Secondary>
                <Primary>37154287</Primary>
              </Line>
            </Column>
            <Primary>119530, РФ, Москва г, ш Очаковское, дом 32</Primary>
            <Column>
              <Secondary tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.CEO" />
              <Primary>Жуков Олег Юрьевич</Primary>
              <Light>2011-12-15</Light>
            </Column>
            <Column>
              <Secondary tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.FOUNDERS_INDIVIDUALS" />
              <Primary>Василенко Владимир Николаевич</Primary>
              <Primary>10 000 руб. - 50%</Primary>
              <Light>2011-10-19</Light>
            </Column>
            <Column>
              <Secondary tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.FINANCES_AT_THE_END_OF_2020" />
              <Line>
                <Light tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.BALANCE" />
                <Primary>48 928 000 руб.</Primary>
              </Line>
              <Line>
                <Light tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.REVENUE" />
                <Primary>136 653 000 руб.</Primary>
              </Line>
              <Line>
                <Light tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.NET_PROFIT" />
                <Primary>7 988 000 руб.</Primary>
              </Line>
            </Column>
          </Content>
        </Container>
      </IndentLayout>
    </PrimaryBox>
  );
}

const Container = styled.div`
  display: grid;
  gap: ${spacing(8)};
  grid-template-columns: 1fr 1fr;
`;
const Content = styled(SectionLayout)``;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;
const Line = styled.div`
  display: inline-flex;
  gap: ${spacing(2)};
`;
const Secondary = styled(SecondaryText)``;
const Primary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Light = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const LinkText = styled(PrimaryLink)`
  color: ${THEME_COLOR.TEXT.ACCENT};
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
