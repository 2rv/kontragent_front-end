import styled from 'styled-components';
import {
  SecondaryText,
  PrimaryText,
  PrimaryTitleText,
} from '../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../lib/theme';
import { ReactComponent as FindIcon } from '../../asset/svg/find-icon-15x15.svg';
import { ReactComponent as KIcon } from '../../asset/svg/k-icon.svg';
import { PrimaryButton } from '../../lib/elements/button';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';
import { PrimaryBox } from '../../lib/elements/box';

export function BalanceActivityComponent({ activityItems, balance }) {
  return (
    <Container>
      <HeaderCase>
        <TitleCase>
          <Title tid="BALANCE.BALANCE_ACTIVITY.TITLE" />
          <Balance tid={balance} />
          <Valute tid="BALANCE.BALANCE_ACTIVITY.VALUTE" />
        </TitleCase>
        <Button tid="BALANCE.BALANCE_ACTIVITY.BUTTON" />
      </HeaderCase>
      <ContentCase>
        {activityItems.map(({ operation, time, sentMoney, check = false }) => {
          return (
            <PrimaryBox>
              <IndentLayout type="STANDART">
                <ItemCase>
                  <InfoCase>
                    <ItemImageIcon altColor={check}>
                      {check ? <WhiteFindIcon /> : <KIcon />}
                    </ItemImageIcon>
                    <ItemInfoCase>
                      <ItemTitle tid={operation} />
                      <ItemText tid={time} />
                    </ItemInfoCase>
                  </InfoCase>
                  {sentMoney && <SentMoney tid={`-${sentMoney}`} />}
                </ItemCase>
              </IndentLayout>
            </PrimaryBox>
          );
        })}
      </ContentCase>
    </Container>
  );
}
const WhiteFindIcon = styled(FindIcon)`
  fill: ${THEME_COLOR.COLOR.BASE};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
  width: 100%;
  height: 100%;
`;
const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TitleCase = styled.div`
  display: flex;
  gap: ${spacing(2)};
  align-items: baseline;
`;
const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
const Balance = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
  color: ${THEME_COLOR.TEXT.ACCENT};
`;
const Valute = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Button = styled(PrimaryButton)`
  width: 226px;
`;
const ContentCase = styled.div`
  display: grid;
  gap: ${spacing(4)};
`;
const ItemCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InfoCase = styled.div`
  display: flex;
  gap: ${spacing(2)};
  align-items: center;
`;
const ItemImageIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  border: none;
  background-color: ${({ altColor }) =>
    altColor ? THEME_COLOR.TEXT.SUCCESS : THEME_COLOR.COLOR.ACCENT};
`;
const ItemInfoCase = styled.div`
  display: flex;
  gap: ${spacing(2)};
  flex-direction: column;
`;
const ItemTitle = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const ItemText = styled(PrimaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.LIGHT};
  font-size: ${THEME_SIZE.FONT.TINY};
`;
const SentMoney = styled(PrimaryTitleText)`
  color: ${THEME_COLOR.TEXT.ERROR};
  font-size: ${THEME_SIZE.FONT.STANDART};
`;
