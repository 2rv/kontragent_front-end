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
            Сегодня «письма счастья» или предпроверочные мероприятия невозможно заблаговременно спрогнозировать, а тем более
            угадать финансовые потери от потенциально планируемых претензий.<br/><br/>
            Сегодняшние реалии таковы, что в определенных контекстах крайне невыгодно предупреждать
            или сигнализировать налогоплательщику о его возможных допущенных нарушениях НК РФ,
            так как от этогобудет зависеть объём средств истребованных в бюджет РФ.<br/><br/>
            Наша платформа как современный медицинский центр: диагностируем, выявляем проблемные места,
            назначаем «курс лечения», выводим из критической ситуации.
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
