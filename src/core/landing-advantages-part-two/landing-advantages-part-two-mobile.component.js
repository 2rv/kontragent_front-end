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
            Сегодня «письма счастья» или предпроверочные мероприятия невозможно заблаговременно спрогнозировать, а тем более
            угадать финансовые потери от потенциально планируемых претензий.<br/><br/>
            Сегодняшние реалии таковы, что в определенных контекстах крайне невыгодно предупреждать
            или сигнализировать налогоплательщику о его возможных допущенных нарушениях НК РФ,
            так как от этогобудет зависеть объём средств истребованных в бюджет РФ.<br/><br/>
            Наша платформа как современный медицинский центр: диагностируем, выявляем проблемные места,
            назначаем «курс лечения», выводим из критической ситуации.
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
            Платформа уникальна и не имеет аналогов.<br/><br/>
            Наши возможные конкуренты заставляют подписывать налоговую{' '}
            <PopoverComponent
              anchorEl={anchorEl}
              visibility={isOpen}
              onClosePopover={onClosePopover}
            />
            <ClauseText isOpen={isOpen} onClick={onOpenPopover}>оговорку*</ClauseText>{' '}
            в договорах всей цепочки прослеживаемых организаций и давать бессрочное согласие ФНС РФ на признание сведений,
            составляющих налоговую тайну общедоступным для мгновенного выявления и доначисления за условно допущенные налоговые
            правонарушения со стороны контрагентов и партнеров клиента.<br/><br/>
            Иными словами, занимаются посреднической деятельностью между государством и налогоплательщиком, при этом<br/>
            не оказывая никакой поддержки и не беря на себя никакой ответственности за данный факт.
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
