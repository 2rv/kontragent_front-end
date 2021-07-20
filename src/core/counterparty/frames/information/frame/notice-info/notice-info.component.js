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
          <SectionLayout>
            <Column>
              <Text>2011-10-19</Text>
              <BoldText tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.ACTING" />
            </Column>
            <Column>
              <Text tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.DATE_OF_INFORMATION" />
              <BoldText>2011-10-19</BoldText>
            </Column>
            <Column>
              <Text tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.TELEPHONE" />
              <BoldText>
                8 (926) 435-34-77, 8 (499) 792-25-93, 8 (916) 562-97-83
              </BoldText>
            </Column>
            <Column>
              <Text tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.AUTHORIZED_CAPITAL" />
              <BoldText>20 000 руб.</BoldText>
              <OpacityText>2011-10-19</OpacityText>
            </Column>
            <Column>
              <BoldText>Жуков Олег Юрьевич</BoldText>
              <BoldText>10 000 руб. - 50%</BoldText>
              <OpacityText>2011-12-15</OpacityText>
            </Column>
            <Column>
              <Text tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.EXECUTION_PROCEEDINGS" />
              <BoldText tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.NO_ENFORCEMENT_PROCEEDINGS_FOUND" />
            </Column>
            <Column>
              <Text tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.EXTRACT_FROM_USRLE" />
              <div>
                <BlueText tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.TO_FORM" />
                &nbsp;
                <BoldText tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.IN_TODAYS_DATE" />
              </div>
            </Column>
          </SectionLayout>
          <SectionLayout>
            <Column>
              <div>
                <Text>ИНН</Text>&nbsp;
                <BoldText>7729693780</BoldText>
              </div>
              <div>
                <Text>КПП</Text>&nbsp;
                <BoldText>772901001</BoldText>
              </div>
              <div>
                <Text>ОГРН</Text>&nbsp;
                <BoldText>1117746830134</BoldText>
              </div>
              <div>
                <Text>ОКПО</Text>&nbsp;
                <BoldText>37154287</BoldText>
              </div>
            </Column>
            <Column>
              <BoldText>119530, РФ, Москва г, ш Очаковское, дом 32</BoldText>
            </Column>
            <Column>
              <Text tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.CEO" />
              <BoldText>Жуков Олег Юрьевич</BoldText>
              <OpacityText>2011-12-15</OpacityText>
            </Column>
            <Column>
              <Text tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.FOUNDERS_INDIVIDUALS" />
              <BoldText>Василенко Владимир Николаевич</BoldText>
              <BoldText>10 000 руб. - 50%</BoldText>
              <OpacityText>2011-10-19</OpacityText>
            </Column>
            <Column>
              <Text tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.FINANCES_AT_THE_END_OF_2020" />
              <div>
                <OpacityText tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.BALANCE" />
                &nbsp;
                <BoldText>48 928 000 руб.</BoldText>
              </div>
              <div>
                <OpacityText tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.REVENUE" />
                &nbsp;
                <BoldText>136 653 000 руб.</BoldText>
              </div>
              <div>
                <OpacityText tid="COUNTERPARTY.DETAIL_INFORMATION.INFO.NET_PROFIT" />
                &nbsp;
                <BoldText>7 988 000 руб.</BoldText>
              </div>
            </Column>
          </SectionLayout>
        </Container>
      </IndentLayout>
    </PrimaryBox>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Text = styled(SecondaryText)`
  line-height: 21px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;

const BoldText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  font-size: ${THEME_SIZE.FONT.SMALL};
  line-height: 21px;
`;

const OpacityText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;

const BlueText = styled(PrimaryLink)`
  color: ${THEME_COLOR.TEXT.ACCENT};
  font-size: ${THEME_SIZE.FONT.TINY};
`;
