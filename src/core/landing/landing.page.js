import Box from '@mui/material/Box';
import { LandingHeaderContainer } from '../landing-header/landing-header.container';
import { LandingHeroContainer } from '../landing-hero/landing-hero.container';
import { LandingAboutContainer } from '../landing-about/landing-about.container';
import { LandingBetaInfoContainer } from '../landing-beta-info/landing-beta-info.container';
import { LandingProblemsContainer } from '../landing-problems/landing-problems.container';
import { LandingReviewContainer } from '../landing-review/landing-review-now.container';
import { LandingAdvantagesContainer } from '../landing-advantages/landing-advantages.container';
import { LandingGetNotificationContainer } from '../landing-get-notification/landing-get-notification.container';
import { LandingAdvantagesPartTwoContainer } from '../landing-advantages-part-two/landing-advantages-part-two.container';
import { LandingPrinciplesContainer } from '../landing-principles/landing-principles.container';
import { LandingStartNowContainer } from '../landing-start-now/landing-start-now.container';
import { LandingFooterContainer } from '../landing-footer/landing-footer.container';

export function LandingPage() {
  return (
    <Box>
      <LandingHeaderContainer />
      <LandingHeroContainer />
      <LandingAboutContainer />
      <LandingBetaInfoContainer />
      <LandingProblemsContainer />
      <LandingReviewContainer />
      <LandingAdvantagesContainer />
      <LandingGetNotificationContainer />
      <LandingAdvantagesPartTwoContainer />
      <LandingPrinciplesContainer />
      <LandingStartNowContainer />
      <LandingFooterContainer />
    </Box>
  );
}
