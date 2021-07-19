import styled from 'styled-components';

import { PrimaryBox } from '../../../../../../lib/elements/box';
import {
  ButtonLayout,
  IndentLayout,
  SectionLayout,
} from '../../../../../../lib/elements/layout';
import {
  PrimaryText,
  SecondaryText,
} from '../../../../../../lib/elements/text';
import { PrimaryButton } from '../../../../../../lib/elements/button';
import { CircleDivider } from '../../../../../../lib/elements/divider';
import {
  spacing,
  THEME_SIZE,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../../../../lib/theme';

export function VerificationsListComponent(props) {
  const { id, companyName, status, price, time, info, paid } = props.data;
  return (
    <Container>
      <Layout type="STANDART">
        <SectionLayout type="SMALL">
          <LineCase>
            <MessageText>{companyName}</MessageText>
            <Status tid={status.title} statusId={status.id} />
          </LineCase>
          <LineCase>
            <PriceText>{price}</PriceText>
            <CircleDivider />
            <Date>{time}</Date>
            <CircleDivider />
            <Info tid={info.title} infoId={info.id} />
          </LineCase>
        </SectionLayout>
        <ButtonLayout type="double">
          <CancelButton tid="COUNTERPARTY.VERIFICATIONS.BUTTONS.CANCEL" />
          {paid ? (
            <PaidButton tid="COUNTERPARTY.VERIFICATIONS.BUTTONS.PAID" />
          ) : (
            <PrimaryButton tid="COUNTERPARTY.VERIFICATIONS.BUTTONS.PAY" />
          )}
        </ButtonLayout>
      </Layout>
    </Container>
  );
}

const Container = styled(PrimaryBox)`
  background: ${THEME_COLOR.COLOR.SECONDARY};
  height: 80px;
`;
const Layout = styled(IndentLayout)`
  display: flex;
  justify-content: space-between;
`;
const LineCase = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
`;
const Status = styled(SecondaryText)`
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
const Info = styled(SecondaryText)`
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
const CancelButton = styled(PrimaryButton)`
  background: ${THEME_COLOR.COLOR.BASE};
  color: ${THEME_COLOR.COLOR.VALIDATION};
  width: 161px;
  height: 46px;
`;

const PaidButton = styled(PrimaryButton)`
  background: ${THEME_COLOR.TEXT.SECONDARY};
  width: 161px;
  height: 46px;
`;
