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
          <LineCase>
            {[1, 2, 3, 4, 5].map((item) => (
              <StarIcon active={item <= 4} />
            ))}
          </LineCase>
        </Case>
        <Case>
          <SecondaryText tid="COUNTERPARTY.RISK_RATING_ASSESSMENT.TURNOVER" />
          <BoldText>310 988.65 руб.</BoldText>
        </Case>
      </SectionLayout>
      <SectionLayout type="MEDIUM">
        <Case>
          <SecondaryText tid="COUNTERPARTY.RISK_RATING_ASSESSMENT.PEOPLES_RATING" />
          <div>
            <BoldText>3,5</BoldText>&nbsp;
            <LightText tid="COUNTERPARTY.RISK_RATING_ASSESSMENT.POINTS" />
          </div>
        </Case>
        <Case>
          <SecondaryText tid="COUNTERPARTY.RISK_RATING_ASSESSMENT.RISK_OF_ADDITIONAL_ACCRUAL" />
          <RedText>47 438.93 руб.</RedText>
        </Case>
      </SectionLayout>
    </Container>
  );
}
const LineCase = styled.div`
  display: flex;
  gap: ${spacing(1)};
`;
const Container = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;
const Case = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;
const LightText = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const StarIcon = styled(IconStar)`
  fill: ${(p) =>
    p.active ? THEME_COLOR.TEXT.WARNING : THEME_COLOR.COLOR.LIGHT_GREY};
`;
const RedText = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.VALIDATION};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const BoldText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
