import styled from 'styled-components';
import {
  SecondaryText,
  PrimaryText,
  PrimaryTitleText,
} from '../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../lib/theme';
import { ReactComponent as OptionIcon } from '../../asset/svg/option-icon-30x30.svg';
import { ReactComponent as FindIcon } from '../../asset/svg/find-icon-15x15.svg';
import { ReactComponent as KIcon } from '../../asset/svg/k-icon.svg';
import { PrimaryButton } from '../../lib/elements/button';

export function BalanceActivityComponent({ activityItems, balance }) {
  return (
    <Container>
      <HeaderCase>
        <TitleCase>
          <Title tid="BALANCE.BALANCE_ACTIVITY.TITLE" />
          <Balace tid={balance} />
          <Valute tid="BALANCE.BALANCE_ACTIVITY.VALUTE" />
        </TitleCase>
        <ActionCase>
          <IconButton>
            <OptionIcon />
          </IconButton>
          <Button tid="BALANCE.BALANCE_ACTIVITY.BUTTON" />
        </ActionCase>
      </HeaderCase>
      <ContentCase>
        {activityItems.map(({ operation, time, sentMoney, check = false }) => {
          return (
            <ItemCase>
              <InfoCase>
                <ItemImageIcon altColor={check}>
                  {check ? <FindIcon /> : <KIcon />}
                </ItemImageIcon>
                <ItemInfoCase>
                  <ItemTitle tid={operation} />
                  <ItemText tid={time} />
                </ItemInfoCase>
              </InfoCase>
              {sentMoney && <SentMoney tid={`-${sentMoney}`} />}
            </ItemCase>
          );
        })}
      </ContentCase>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
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
const Balace = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
  color: ${THEME_COLOR.TEXT.ACCENT};
`;
const Valute = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const ActionCase = styled.div`
  display: flex;
  gap: ${spacing(4)};
  align-items: center;
`;
const IconButton = styled.div``;
const Button = styled(PrimaryButton)`
  padding: ${spacing(3)} ${spacing(10)};
`;
const ContentCase = styled.div`
  display: grid;
  gap: ${spacing(4.5)};
`;
const ItemCase = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${THEME_COLOR.COLOR.BASE};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  padding: ${spacing(4)};
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
