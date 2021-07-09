import styled from 'styled-components';

import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout } from '../../../../lib/elements/layout';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryButton } from '../../../../lib/elements/button';
import { CicleDivider } from '../../../../lib/elements/divider';
import { spacing, THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../../../lib/theme';

export function KontragentChecksListComponent({ kontragentChecksList }) {
  return (
    kontragentChecksList.map((kontragentCheck) => (
      <Box key={kontragentCheck.id}>
        <Layout type="SMALL">
          <Container>
            <Content>
              <MessageText>{kontragentCheck.companyName}</MessageText>
              <Status statusId={kontragentCheck.status.id}>{kontragentCheck.status.title}</Status>
            </Content>
            <Content>
              <PriceText>{kontragentCheck.price}</PriceText>
              <CicleDivider />
              <Date>{kontragentCheck.time}</Date>
              <CicleDivider />
              <Info infoId={kontragentCheck.info.id}>{kontragentCheck.info.title}</Info>
            </Content>
          </Container>
          <ButtonsContainer>
            <CancelButton tid="Отменить" />
            {kontragentCheck.paid ? (
              <PaidButton tid="Оплачена" />
            ) : (
              <PrimaryButton tid="Оплатить" />
            )}
          </ButtonsContainer>
        </Layout>
      </Box>
    ))
  );
}

const Box = styled(PrimaryBox)`
  background: ${THEME_COLOR.COLOR.SECONDARY};
`;

const Layout = styled(IndentLayout)`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-gap: ${spacing(2)};
  padding: ${spacing(2)};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  grid-column-gap: ${spacing(2)};
`;

const Status = styled.span`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${(props) => {
    switch (props.statusId) {
      case 0:
        return THEME_COLOR.TEXT.ACCENT;
      case 1:
        return THEME_COLOR.TEXT.PURPLE;
      default:
        return THEME_COLOR.COLOR.ACCENT;
    }
  }};
`;

const Info = styled.span`
  font-size: ${THEME_SIZE.FONT.TINY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  color: ${(props) => {
    switch (props.infoId) {
      case 0:
        return THEME_COLOR.TEXT.SUCCESS;
      case 1:
        return THEME_COLOR.TEXT.WARNING;
      case 2:
        return THEME_COLOR.TEXT.ACCENT;
      default:
        return THEME_COLOR.COLOR.SUCCESS;
    }
  }};
`;

const MessageText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const PriceText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;

const Date = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;

const ButtonsContainer = styled.div`
  display: flex;
  grid-column-gap: ${spacing(4)};
  button {
    width: 161px;
  }
`;

const CancelButton = styled(PrimaryButton)`
  background: ${THEME_COLOR.COLOR.BASE};
  color: ${THEME_COLOR.COLOR.VALIDATION};
`;

const PaidButton = styled(PrimaryButton)`
  background: ${THEME_COLOR.TEXT.SECONDARY};
`;
