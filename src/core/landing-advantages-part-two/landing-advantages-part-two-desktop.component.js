import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingAdvantagesPartTwoSectionDesktopCompmponent } from './frame/landing-advantages-part-two-section-desktop.component';
import { PopoverComponent } from './frame/popover.component';
import { text } from '../../lib/common/text';

export function LandingAdvantagesPartTwoDesktopComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const onOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onClosePopover = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: { xs: 'none', lg: 'grid' }, gap: '32px' }}>
      <LandingAdvantagesPartTwoSectionDesktopCompmponent
        image={`/static/img/landing/landing-advantages-part-two/image-1.svg`}
        title={text('LANDING.ADVANTAGES_PART_TWO.BLOCK_1.TITLE')}
        description={
          <Typography variant="body1">
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_1.DESCRIPTION_1')}<br/><br/>
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_1.DESCRIPTION_2')}<br/><br/>
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_1.DESCRIPTION_3')}
          </Typography>
        }
      />
      <LandingAdvantagesPartTwoSectionDesktopCompmponent
        rowReverse={true}
        image={`/static/img/landing/landing-advantages-part-two/image-2.svg`}
        title={text('LANDING.ADVANTAGES_PART_TWO.BLOCK_2.TITLE')}
        description={
          <Typography variant="body1">
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_2.DESCRIPTION')}
          </Typography>
        }
      />
      <LandingAdvantagesPartTwoSectionDesktopCompmponent
        image={`/static/img/landing/landing-advantages-part-two/image-3.svg`}
        title={text('LANDING.ADVANTAGES_PART_TWO.BLOCK_3.TITLE')}
        description={
          <Typography variant="body1">
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_3.DESCRIPTION_1')}<br/><br/>
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_3.DESCRIPTION_BEFORE_CLAUSE')}{' '}
            <PopoverComponent
              anchorEl={anchorEl}
              visibility={Boolean(anchorEl)}
              onClosePopover={onClosePopover}
            />
            <span style={{ cursor: 'pointer', fontWeight: 600 }} onClick={onOpenPopover}>{text('LANDING.ADVANTAGES_PART_TWO.BLOCK_3.CLAUSE')}</span>{' '}
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_3.DESCRIPTION_AFTER_CLAUSE')}<br/><br/>
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_3.DESCRIPTION_3')}
          </Typography>
        }
      />
    </Box>
  );
}
