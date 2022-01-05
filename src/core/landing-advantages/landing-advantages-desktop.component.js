import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';

import { LandingAdvantagesSectionDesktopCompmponent } from './frame/landing-advantages-section-desktop.component';

export function LandingAdvantagesDesktopComponent() {
  return (
    <Box sx={{ display: 'grid', gap: '32px' }}>
      <LandingAdvantagesSectionDesktopCompmponent
        rowReverse={true}
        image={`/static/img/landing/landing-advantages/image-1.svg`}
        title={
          <Typography variant="landingTitle" sx={{ fontSize: '24px' }}>
            {text('LANDING.ADVANTAGES.BLOCK_1.TITLE')}
          </Typography>
        }
        description={
          <Typography variant="body1">
            {text('LANDING.ADVANTAGES.BLOCK_1.DESCRIPTION')}
          </Typography>
        }
      />
      <LandingAdvantagesSectionDesktopCompmponent
        image={`/static/img/landing/landing-advantages/image-2.svg`}
        title={
          <Typography variant="landingTitle" sx={{ fontSize: '24px' }}>
            {text('LANDING.ADVANTAGES.BLOCK_2.TITLE')}
          </Typography>
        }
        description={
          <Typography variant="body1" sx={{ maxWidth: '480px' }}>
            {text('LANDING.ADVANTAGES.BLOCK_2.DESCRIPTION_1')}<br/>
            {text('LANDING.ADVANTAGES.BLOCK_2.DESCRIPTION_2')}<br/><br/>
            {text('LANDING.ADVANTAGES.BLOCK_2.DESCRIPTION_3')}
          </Typography>
        }
      />
      <LandingAdvantagesSectionDesktopCompmponent
        rowReverse={true}
        image={`/static/img/landing/landing-advantages/image-3.svg`}
        title={
          <Typography variant="landingTitle" sx={{ fontSize: '24px' }}>
            {text('LANDING.ADVANTAGES.BLOCK_3.TITLE')}
          </Typography>
        }
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
