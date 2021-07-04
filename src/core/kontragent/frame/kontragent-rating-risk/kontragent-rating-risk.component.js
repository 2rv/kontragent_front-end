import styled from 'styled-components';
import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { SecondaryTitleText } from '../../../../lib/elements/text';
import { ReactComponent as FullStar } from '../../../../asset/svg/fullstar.svg';
import { ReactComponent as EmptyStar } from '../../../../asset/svg/emptystar.svg';
import { ReactComponent as NoRatingStar } from '../../../../asset/svg/norating.svg';
import { THEME_VALUE, THEME_COLOR, spacing } from '../../../../lib/theme';
export function KontragentRatingRiskComponent(props) {
  const {
    companyType,
    companyName,
    userRating,
    generalRating,
    finances,
    risk,
  } = props.kontragentRatingRiskData;

  //PARAM RATING IS NUMBER FROM 0 TO 5, WHERE 0 IS NOT RATED
  const getRetingStars = (rating) => {
    const ratingArray = [...Array(5).keys()].map((e, index) => {
      return index < rating ? 1 : 0;
    });
    return rating !== 0
      ? ratingArray.map((star) => (star === 1 ? <FullStar /> : <EmptyStar />))
      : ratingArray.map(() => <NoRatingStar />);
  };

  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout type="HUGE">
          <SectionLayout type="MEDIUM">
            <SecondaryTitleText tid="KONTRAGENT.TAB.RATING_RISK.HEADER" />
            <PrimaryText>
              <SecondaryText>{companyType}</SecondaryText>
              {companyName}
            </PrimaryText>
          </SectionLayout>
          <Container>
            <InformationContainer>
              <SectionLayout>
                <SectionLayout type="MEDIUM">
                  <SecondaryText tid="KONTRAGENT.TAB.RATING_RISK.USER_RATING" />
                  <Rating>{getRetingStars(userRating)}</Rating>
                </SectionLayout>
                <SectionLayout type="MEDIUM">
                  <SecondaryText tid="KONTRAGENT.TAB.RATING_RISK.FINANCES" />
                  <Info>{finances}</Info>
                </SectionLayout>
              </SectionLayout>
            </InformationContainer>
            <InformationContainer>
              <SectionLayout>
                <SectionLayout type="MEDIUM">
                  <SecondaryText tid="KONTRAGENT.TAB.RATING_RISK.GENERAL_RATING" />
                  <Info>{generalRating}</Info>
                </SectionLayout>
                <SectionLayout type="MEDIUM">
                  <SecondaryText tid="KONTRAGENT.TAB.RATING_RISK.RISK" />
                  <HighlightedInfo>{risk}</HighlightedInfo>
                </SectionLayout>
              </SectionLayout>
            </InformationContainer>
          </Container>
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}

const Container = styled.div`
  display: flex;
  grid-column-gap: ${spacing(8)};
`;

const InformationContainer = styled(Container)`
  flex-direction: column;
`;

const Rating = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: ${spacing(1)};
`;

const Info = styled(SecondaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;

const HighlightedInfo = styled(Info)`
  color: ${THEME_COLOR.TEXT.ERROR};
`;
