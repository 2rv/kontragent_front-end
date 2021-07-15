import styled from 'styled-components';

import { ReactComponent as MenuIcon } from '../../../../../../asset/svg/option-icon.svg';
import { ReactComponent as SearchIcon } from '../../../../../../asset/svg/search.svg';

import { PrimaryBox } from '../../../../../../lib/elements/box';
import { SectionLayout, IndentLayout } from '../../../../../../lib/elements/layout';
import { PrimaryText, SecondaryText } from '../../../../../../lib/elements/text';
import { PrimaryDivider } from '../../../../../../lib/elements/divider';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../../../../../lib/theme';

export function StatisticsComponent() {
  return (
    <Container>
      <PrimaryBox>
        <SectionLayout>
          <IndentLayout type="STANDART">
            <HeaderContainer>
              <div>
                <TitlePrimary tid="Общая статистика" />&nbsp;
                <TitleSecondary tid="(сутки)" />
              </div>
              <MenuIcon />
            </HeaderContainer>
            <PrimaryDivider />
            <Content>
              <CircularProgress />
              <Column>
                <div>
                  <TinyTextPrimary tid="250" />&nbsp;
                  <TinyTextSecondary tid="Просмотров контрагентов, из них" />:
                </div>
                <div>
                  <RedText tid="25%" />&nbsp;
                  <RedText tid="негативных" />,&nbsp;
                  <GreenText tid="25%" />&nbsp;
                  <GreenText tid="положительных" />&nbsp;
                  <TinyTextSecondary tid="и" />&nbsp;
                  <BlueText tid="50%" />&nbsp;
                  <BlueText tid="не оценено" />.
                </div>
                <LinkText tid="Узнать больше" />
              </Column>
            </Content>
          </IndentLayout>
        </SectionLayout>
      </PrimaryBox>
      <PrimaryBox>
        <SectionLayout>
          <IndentLayout type="STANDART">
            <HeaderContainer>
              <TitlePrimary tid="Статистика за 24ч." />
              <SearchIcon />
            </HeaderContainer>
            <PrimaryDivider />
            <Content>
              <Column>
                <div>
                  <GreenText tid="250" />&nbsp;
                  <EasyBoldText tid="Просмотров контрагентов." />&nbsp;
                  <BottomUnderlineText tid="Узнать подробно о каждом" />
                </div>
                <div>
                  <RedText tid="1250" />&nbsp;
                  <ValuteText tid="руб." />&nbsp;
                  <EasyBoldText tid="Доначисления." />&nbsp;
                  <BottomUnderlineText tid="Как уменьшить риск доначислений?" />
                </div>
                <div>
                  <BlueText tid="250 000" />&nbsp;
                  <ValuteText tid="руб." />&nbsp;
                  <EasyBoldText tid="Оборот." />&nbsp;
                </div>
              </Column>
            </Content>
          </IndentLayout>
        </SectionLayout>
      </PrimaryBox>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${spacing(8)};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing(2)};
`;

const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;

const TitleSecondary = styled(TitlePrimary)`
  color: ${THEME_COLOR.TEXT.SECONDARY};
`;

const TinyTextPrimary = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;

const TinyTextSecondary = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.SECONDARY};
  font-size: ${THEME_SIZE.FONT.TINY};
`;

const RedText = styled(TinyTextPrimary)`
  color: ${THEME_COLOR.COLOR.VALIDATION};
`;

const GreenText = styled(TinyTextPrimary)`
  color: ${THEME_COLOR.TEXT.SUCCESS};
`;

const BlueText = styled(TinyTextPrimary)`
  color: ${THEME_COLOR.COLOR.ACCENT};
`;

const LinkText = styled(TitlePrimary)`
  color: ${THEME_COLOR.TEXT.ACCENT};
  margin-top: ${spacing(2)};
`;

const BottomUnderlineText = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.TINY};
  text-decoration: underline;
`;

const EasyBoldText = styled(TinyTextPrimary)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.REGULAR};
`;

const ValuteText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
  margin-top: ${spacing(2)};
`;

const CircularProgress = styled.div`
  height: 72px;
  width: 72px;
  border: 10px solid ${THEME_COLOR.COLOR.ACCENT};
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
`;
