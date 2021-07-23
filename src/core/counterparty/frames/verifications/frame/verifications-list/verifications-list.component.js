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
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../../../../lib/elements/button';
import { CircleDivider } from '../../../../../../lib/elements/divider';
import {
  spacing,
  THEME_SIZE,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../../../../lib/theme';
import { BaseList } from '../../../../../../lib/elements/list';

export function VerificationsListComponent(props) {
  const { verificationListData } = props;
  return (
    <BaseList
      itemBackground={THEME_COLOR.COLOR.SECONDARY}
      listData={verificationListData}
      skeletonAction={false}
    >
      {(props) => {
        const { id, companyName, status, price, time, info, paid } = props;
        return (
          <Container>
            <SectionLayout type="SMALL">
              <Line>
                <MessageText>{companyName}</MessageText>
                <Status tid={status.title} statusId={status.id} />
              </Line>
              <Line>
                <PriceText>{price}</PriceText>
                <CircleDivider />
                <Date>{time}</Date>
                <CircleDivider />
                <Info tid={info.title} infoId={info.id} />
              </Line>
            </SectionLayout>
            <ActionCase>
              <CancelButton tid="COUNTERPARTY.VERIFICATIONS.BUTTONS.CANCEL" />
              {paid ? (
                <PaidButton tid="COUNTERPARTY.VERIFICATIONS.BUTTONS.PAID" />
              ) : (
                <PayButton tid="COUNTERPARTY.VERIFICATIONS.BUTTONS.PAY" />
              )}
            </ActionCase>
          </Container>
        );
      }}
    </BaseList>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;
const Line = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${spacing(2)};
  align-items: center;
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
const ActionCase = styled.div`
  display: grid;
  grid-template-columns: 160px 160px;
  gap: ${spacing(3)};
  align-items: center;
`;
const CancelButton = styled(PrimaryButton)`
  background: ${THEME_COLOR.COLOR.BASE};
  color: ${THEME_COLOR.COLOR.VALIDATION};
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;
const PaidButton = styled(SecondaryButton)`
  background-color: ${THEME_COLOR.TEXT.SECONDARY};
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;
const PayButton = styled(PrimaryButton)`
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;
