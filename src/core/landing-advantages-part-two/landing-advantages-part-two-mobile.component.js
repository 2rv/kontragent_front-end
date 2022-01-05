import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingAdvantagesPartTwoSectionMobileCompmponent } from './frame/landing-advantages-part-two-section-mobile.component';
import { PopoverComponent } from './frame/popover.component';
import { text } from '../../lib/common/text';

export function LandingAdvantagesPartTwoMobileComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isOpen = Boolean(anchorEl);

  const onOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onClosePopover = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'grid', gap: '24px' }}>
      <LandingAdvantagesPartTwoSectionMobileCompmponent
        image={`/static/img/landing/landing-advantages-part-two/image-1-mobile.svg`}
        title={
          <Title variant="landingTitle">
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_1.TITLE')}
          </Title>
        }
        description={
          <SmallText variant="body1">
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_1.DESCRIPTION_1')}<br/><br/>
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_1.DESCRIPTION_2')}<br/><br/>
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_1.DESCRIPTION_3')}
          </SmallText>
        }
      />
      <LandingAdvantagesPartTwoSectionMobileCompmponent
        rowReverse={true}
        image={`/static/img/landing/landing-advantages-part-two/image-2-mobile.svg`}
        title={
          <Title variant="landingTitle">
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_2.TITLE')}
          </Title>
        }
        description={
          <SmallText variant="body1">
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_2.DESCRIPTION')}
          </SmallText>
        }
      />
      <LandingAdvantagesPartTwoSectionMobileCompmponent
        image={`/static/img/landing/landing-advantages-part-two/image-3-mobile.svg`}
        title={
          <Title variant="landingTitle">
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_3.TITLE')}
          </Title>
        }
        description={
          <SmallText variant="body1">
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
          </SmallText>
        }
      />
    </Box>
  );
}

const Title = styled(Typography)`
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 16px;
    line-height: 21px;
  }
`;

const SmallText = styled(Typography)`
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const ClauseText = styled.span`
  font-weight: 600;
  cursor: pointer;
  ${(props) => props.isOpen && `
    text-decoration: underline;
    text-underline-offset: 3px;
  `}
`;
