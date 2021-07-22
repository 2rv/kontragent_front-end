import styled from 'styled-components';

import { ReactComponent as IconStar } from '../../../../../../asset/svg/star-icon.svg';

import { SectionLayout } from '../../../../../../lib/elements/layout';
import {
  PrimaryText,
  SecondaryText,
} from '../../../../../../lib/elements/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../../../lib/theme';

export function RatingComponent() {
  return (
    <Container>
      <SectionLayout>
        <Case>
          <SecondaryText tid="COUNTERPARTY.RISK_RATING_ASSESSMENT.YOUR_MARK" />
          <Line>
            {[1, 2, 3, 4, 5].map((item) => (
              <StarIcon active={item <= 4} />
            ))}
          </Line>
        </Case>
        <Case>
          <SecondaryText tid="COUNTERPARTY.RISK_RATING_ASSESSMENT.TURNOVER" />
          <BoldText>310 988.65 руб.</BoldText>
        </Case>
      </SectionLayout>
      <VerticalDivider />
      <SectionLayout>
        <Case>
          <SecondaryText tid="COUNTERPARTY.RISK_RATING_ASSESSMENT.PEOPLES_RATING" />
          <Line>
            <BoldText>3,5</BoldText>
            <LightText tid="COUNTERPARTY.RISK_RATING_ASSESSMENT.POINTS" />
          </Line>
        </Case>
        <Case>
          <SecondaryText tid="COUNTERPARTY.RISK_RATING_ASSESSMENT.RISK_OF_ADDITIONAL_ACCRUAL" />
          <Line>
            <RedText>47 438.93 </RedText>
            <RedText tid="руб." />
          </Line>
        </Case>
      </SectionLayout>
    </Container>
  );
}
const VerticalDivider = styled.div`
  width: 2px;
  height: 100%;
  border: 1px solid ${THEME_COLOR.COLOR.SECONDARY};
`;
const Line = styled.div`
  display: inline-flex;
  gap: ${spacing(2)};
`;
const Container = styled.div`
  display: flex;
  gap: ${spacing(4)};
`;
const Case = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;

const StarIcon = styled(IconStar)`
  fill: ${(p) =>
    p.active ? THEME_COLOR.TEXT.WARNING : THEME_COLOR.COLOR.LIGHT_GREY};
`;
const RedText = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.VALIDATION};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const BoldText = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const LightText = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
