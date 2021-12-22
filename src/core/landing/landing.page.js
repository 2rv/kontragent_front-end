import Grid from '@mui/material/Grid';
import { LandingHeaderContainer } from '../landing-header/landing-header.container';
import { LandingHeroContainer } from '../landing-hero/landing-hero.container';
import { LandingAboutContainer } from '../landing-about/landing-about.container';
import { LandingBetaInfoContainer } from '../landing-beta-info/landing-beta-info.container';
import { LandingProblemsContainer } from '../landing-problems/landing-problems.container';
import { LandingReviewContainer } from '../landing-review/landing-review-now.container';
import { LandingGetNotificationContainer } from '../landing-get-notification/landing-get-notification.container';
import { LandingPrinciplesContainer } from '../landing-principles/landing-principles.container';
import { LandingStartNowContainer } from '../landing-start-now/landing-start-now.container';
import { LandingFooterContainer } from '../landing-footer/landing-footer.container';
import { LandingAdvantagesContainer } from '../landing-advantages/landing-advantages.container';
import { LandingAdvantagesPartTwoContainer } from '../landing-advantages-part-two/landing-advantages-part-two.container';

export function LandingPage() {
  return (
    <Grid spacing={6} container>
      <Grid item style={{ padding: 0 }}>
        <LandingHeaderContainer />
      </Grid>
      <Grid item style={{ padding: 0, backgroundColor: '#fff' }}>
        <LandingHeroContainer />
      </Grid>
      <Grid item style={{ padding: 0, backgroundColor: '#F3F3F3' }}>
        <LandingAboutContainer />
      </Grid>
      <Grid item style={{ padding: 0, backgroundColor: '#fff' }}>
        <LandingBetaInfoContainer />
      </Grid>
      <Grid item style={{ padding: 0, backgroundColor: '#F3F3F3' }}>
        <LandingProblemsContainer />
      </Grid>
      <Grid item style={{ padding: 0, backgroundColor: '#3AB8FF' }}>
        <LandingReviewContainer />
      </Grid>
      <Grid item style={{ padding: 0, backgroundColor: '#fff' }}>
        <LandingAdvantagesContainer />
      </Grid>
      <Grid item style={{ padding: 0, backgroundColor: '#F3F3F3' }}>
        <LandingGetNotificationContainer />
      </Grid>
      <Grid item style={{ padding: 0, backgroundColor: '#fff' }}>
        <LandingAdvantagesPartTwoContainer />
      </Grid>
      <Grid item style={{ padding: 0, backgroundColor: '#F3F3F3' }}>
        <LandingPrinciplesContainer />
      </Grid>
      <Grid item style={{ padding: 0, backgroundColor: '#3AB8FF' }}>
        <LandingStartNowContainer />
      </Grid>
      <Grid item style={{ padding: 0, backgroundColor: '#F3F3F3' }}>
        <LandingFooterContainer />
      </Grid>
    </Grid>
  );
}
