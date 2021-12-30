import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';

import { LandingAdvantagesSectionMobileCompmponent } from './frame/landing-advantages-section-mobile.component';

export function LandingAdvantagesMobileComponent() {
  return (
    <Box sx={{ display: { xs: 'grid', md: 'none' }, gap: '24px' }}>
      <LandingAdvantagesSectionMobileCompmponent
        rowReverse={true}
        image={`/static/img/landing/landing-advantages/image-1-mobile.svg`}
        title={text('LANDING.ADVANTAGES.BLOCK_1.TITLE')}
        description={
          <Typography variant="body1">
            {text('LANDING.ADVANTAGES.BLOCK_1.DESCRIPTION')}
          </Typography>
        }
      />
      <LandingAdvantagesSectionMobileCompmponent
        image={`/static/img/landing/landing-advantages/image-2-mobile.svg`}
        title={text('LANDING.ADVANTAGES.BLOCK_2.TITLE')}
        description={
          <Typography variant="body1">
            {text('LANDING.ADVANTAGES.BLOCK_2.DESCRIPTION_1')}<br/><br/>
            {text('LANDING.ADVANTAGES.BLOCK_2.DESCRIPTION_2')}
          </Typography>
        }
      />
      <LandingAdvantagesSectionMobileCompmponent
        rowReverse={true}
        image={`/static/img/landing/landing-advantages/image-3-mobile.svg`}
        title={text('LANDING.ADVANTAGES.BLOCK_3.TITLE')}
        description={
          <ul style={{ listStyle: 'inherit', marginLeft: '15px' }}>
            <li><Typography variant="body1">{text('LANDING.ADVANTAGES.BLOCK_3.LIST.ITEM_1')}</Typography></li>
            <li><Typography variant="body1">{text('LANDING.ADVANTAGES.BLOCK_3.LIST.ITEM_2')}</Typography></li>
            <li><Typography variant="body1">{text('LANDING.ADVANTAGES.BLOCK_3.LIST.ITEM_3')}</Typography></li>
            <li><Typography variant="body1">{text('LANDING.ADVANTAGES.BLOCK_3.LIST.ITEM_4')}</Typography></li>
          </ul>
        }
      />
    </Box>
  );
}
