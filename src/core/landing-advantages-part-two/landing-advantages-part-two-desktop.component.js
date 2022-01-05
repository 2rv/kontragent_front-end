import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingAdvantagesPartTwoSectionDesktopCompmponent } from './frame/landing-advantages-part-two-section-desktop.component';
import { PopoverComponent } from './frame/popover.component';
import { text } from '../../lib/common/text';

export function LandingAdvantagesPartTwoDesktopComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isOpen = Boolean(anchorEl);

  const onOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onClosePopover = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'grid', gap: '32px' }}>
      <LandingAdvantagesPartTwoSectionDesktopCompmponent
        image={`/static/img/landing/landing-advantages-part-two/image-1.svg`}
        title={
          <Typography variant="landingTitle" sx={{ fontSize: '24px' }}>
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_1.TITLE')}
          </Typography>
        }
        description={
          <Typography variant="body1" sx={{ maxWidth: '480px' }}>
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_1.DESCRIPTION_1')}<br/><br/>
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_1.DESCRIPTION_2')}<br/><br/>
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_1.DESCRIPTION_3')}
          </Typography>
        }
      />
      <LandingAdvantagesPartTwoSectionDesktopCompmponent
        rowReverse={true}
        image={`/static/img/landing/landing-advantages-part-two/image-2.svg`}
        title={
          <Typography variant="landingTitle" sx={{ fontSize: '24px', maxWidth: '350px' }}>
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_2.TITLE')}
          </Typography>
        }
        description={
          <Typography variant="body1" sx={{ maxWidth: '495px' }}>
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_2.DESCRIPTION')}
          </Typography>
        }
      />
      <LandingAdvantagesPartTwoSectionDesktopCompmponent
        image={`/static/img/landing/landing-advantages-part-two/image-3.svg`}
        title={
          <Typography variant="landingTitle" sx={{ fontSize: '24px' }}>
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_3.TITLE')}
          </Typography>
        }
        description={
          <Typography variant="body1" sx={{ maxWidth: '490px' }}>
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_3.DESCRIPTION_1')}<br/><br/>
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_3.DESCRIPTION_BEFORE_CLAUSE')}{' '}
            <PopoverComponent
              anchorEl={anchorEl}
              visibility={isOpen}
              onClosePopover={onClosePopover}
            />
            <ClauseText isOpen={isOpen} onClick={onOpenPopover}>{text('LANDING.ADVANTAGES_PART_TWO.BLOCK_3.CLAUSE')}</ClauseText>{' '}
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_3.DESCRIPTION_AFTER_CLAUSE')}<br/><br/>
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_3.DESCRIPTION_3')}
          </Typography>
        }
      />
    </Box>
  );
}

const ClauseText = styled.span`
  font-weight: 600;
  cursor: pointer;
  ${(props) => props.isOpen && `
    text-decoration: underline;
    text-underline-offset: 3px;
  `}
`;
