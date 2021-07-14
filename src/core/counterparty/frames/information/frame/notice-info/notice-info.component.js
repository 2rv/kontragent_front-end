import styled from 'styled-components';

import { PrimaryBox } from '../../../../../../lib/elements/box';
import { IndentLayout } from '../../../../../../lib/elements/layout';
import { SecondaryText, PrimaryText } from '../../../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../../../../../lib/theme';

export function NoticeInfoComponent() {
  return (
    <Container>
      <IndentLayout>
        <NoticeInfoContainer>
          <div>
            <NoticeInfoItem>
              <SecondaryText>2011-10-19</SecondaryText>
              <BoldText tid="Действующее" />
            </NoticeInfoItem>
            <NoticeInfoItem>
              <SecondaryText tid="Дата образования" />
              <BoldText>2011-10-19</BoldText>
            </NoticeInfoItem>
            <NoticeInfoItem>
              <SecondaryText tid="Телефон" />
              <BoldText>8 (926) 435-34-77, 8 (499) 792-25-93, 8 (916) 562-97-83</BoldText>
            </NoticeInfoItem>
            <NoticeInfoItem>
              <SecondaryText tid="Уставный капитал" />
              <BoldText>20 000 руб.</BoldText>
              <OpacityText>2011-10-19</OpacityText>
            </NoticeInfoItem>
            <NoticeInfoItem>
              <BoldText>Жуков Олег Юрьевич</BoldText>
              <BoldText>10 000 руб. - 50%</BoldText>
              <OpacityText>2011-12-15</OpacityText>
            </NoticeInfoItem>
            <NoticeInfoItem>
              <SecondaryText tid="Исполнители производства" />
              <BoldText tid="Не найдено исполнительных производств" />
            </NoticeInfoItem>
            <NoticeInfoItem>
              <SecondaryText tid="Выписка из ЕГРЮЛ" />
              <div>
                <BlueText tid="Сформировать" />&nbsp;
                <BoldText tid="по состоянию на сегодня" />
              </div>
            </NoticeInfoItem>
          </div>
          <div>
            <NoticeInfoItem>
              <div>
                <SecondaryText>ИНН</SecondaryText>&nbsp;
                <BoldText>7729693780</BoldText>
              </div>
              <div>
                <SecondaryText>КПП</SecondaryText>&nbsp;
                <BoldText>772901001</BoldText>
              </div>
              <div>
                <SecondaryText>ОГРН</SecondaryText>&nbsp;
                <BoldText>1117746830134</BoldText>
              </div>
              <div>
                <SecondaryText>ОКПО</SecondaryText>&nbsp;
                <BoldText>37154287</BoldText>
              </div>
            </NoticeInfoItem>
            <NoticeInfoItem>
              <BoldText>119530, РФ, Москва г, ш Очаковское, дом 32</BoldText>
            </NoticeInfoItem>
            <NoticeInfoItem>
              <SecondaryText tid="Генеральный директор" />
              <BoldText>Жуков Олег Юрьевич</BoldText>
              <OpacityText>2011-12-15</OpacityText>
            </NoticeInfoItem>
            <NoticeInfoItem>
              <SecondaryText tid="Учредители - физические лица:" />
              <BoldText>Василенко Владимир Николаевич</BoldText>
              <BoldText>10 000 руб. - 50%</BoldText>
              <OpacityText>2011-10-19</OpacityText>
            </NoticeInfoItem>
            <NoticeInfoItem>
              <SecondaryText tid="Финансы на конец 2020 года" />
              <div>
                <OpacityText>Баланс:</OpacityText>&nbsp;
                <BoldText>48 928 000 руб.</BoldText>
              </div>
              <div>
                <OpacityText>Выручка:</OpacityText>&nbsp;
                <BoldText>136 653 000 руб.</BoldText>
              </div>
              <div>
                <OpacityText>Чистая прибыль:</OpacityText>&nbsp;
                <BoldText>7 988 000 руб.</BoldText>
              </div>
            </NoticeInfoItem>
          </div>
        </NoticeInfoContainer>
      </IndentLayout>
    </Container>
  );
}

const Container = styled(PrimaryBox)`
  margin: ${spacing(7)} 0;
`;

const NoticeInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const NoticeInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${spacing(5)};
`;

const BoldText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  line-height: 21px;
`;

const OpacityText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  opacity: 0.4;
`;

const BlueText = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.ACCENT};
`;
