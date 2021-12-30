import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingAdvantagesPartTwoSectionMobileCompmponent } from './frame/landing-advantages-part-two-section-mobile.component';
import { PopoverComponent } from './frame/popover.component';
import { text } from '../../lib/common/text';

export function LandingAdvantagesPartTwoMobileComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const onOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onClosePopover = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: { xs: 'grid', lg: 'none' }, gap: '24px' }}>
      <LandingAdvantagesPartTwoSectionMobileCompmponent
        image={`/static/img/landing/landing-advantages-part-two/image-1-mobile.svg`}
        title={text('LANDING.ADVANTAGES_PART_TWO.BLOCK_1.TITLE')}
        description={
          <Typography variant="body1">
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_1.DESCRIPTION_1')}<br/><br/>
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_1.DESCRIPTION_2')}<br/><br/>
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_1.DESCRIPTION_3')}
          </Typography>
        }
      />
      <LandingAdvantagesPartTwoSectionMobileCompmponent
        rowReverse={true}
        image={`/static/img/landing/landing-advantages-part-two/image-2-mobile.svg`}
        title={text('LANDING.ADVANTAGES_PART_TWO.BLOCK_2.TITLE')}
        description={
          <Typography variant="body1">
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_2.DESCRIPTION')}
          </Typography>
        }
      />
      <LandingAdvantagesPartTwoSectionMobileCompmponent
        image={`/static/img/landing/landing-advantages-part-two/image-3-mobile.svg`}
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

const SmallText = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
