import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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
    <Grid container spacing={8} direction="row" justifyContent="flex-start">
      <Grid item xs={6}>
        <img
          src={`/static/img/landing/landing-advantages-part-two/image-1.svg`}
        />
      </Grid>

      <Grid item xs={6} container spacing={6}>
        <Grid item>
          <Typography
            variant="landingTitle"
            component="div"
            sx={{ fontSize: '24px', lineHeight: 1.5, maxWidth: 504 }}
          >
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_1.TITLE')}
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="landingText">
            Сегодня «письма счастья» или предпроверочные мероприятия невозможно
            заблаговременно спрогнозировать, а тем более угадать финансовые
            потери от потенциально планируемых претензий.
            <br />
            <br />
            Сегодняшние реалии таковы, что в определенных контекстах крайне
            невыгодно предупреждать или сигнализировать налогоплательщику о его
            возможных допущенных нарушениях НК РФ, так как от этогобудет
            зависеть объём средств истребованных в бюджет РФ.
            <br />
            <br />
            Наша платформа как современный медицинский центр: диагностируем,
            выявляем проблемные места, назначаем «курс лечения», выводим из
            критической ситуации.
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={6} container spacing={6}>
        <Grid item>
          <Typography
            variant="landingTitle"
            component="div"
            sx={{ fontSize: '24px', lineHeight: 1.5, maxWidth: 350 }}
          >
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_2.TITLE')}
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="landingText">
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_2.DESCRIPTION')}
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={6}>
        <img
          src={`/static/img/landing/landing-advantages-part-two/image-2.svg`}
        />
      </Grid>

      <Grid item xs={6}>
        <img
          src={`/static/img/landing/landing-advantages-part-two/image-3.svg`}
        />
      </Grid>

      <Grid item xs={6} container spacing={6}>
        <Grid item>
          <Typography
            variant="landingTitle"
            sx={{ fontSize: '24px', lineHeight: 1.5 }}
          >
            {text('LANDING.ADVANTAGES_PART_TWO.BLOCK_3.TITLE')}
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            variant="landingText"
            component="div"
            sx={{ maxWidth: 500 }}
          >
            Платформа уникальна и не имеет аналогов.
            <br />
            <br />
            Наши возможные конкуренты заставляют подписывать налоговую{' '}
            <PopoverComponent
              anchorEl={anchorEl}
              visibility={isOpen}
              onClosePopover={onClosePopover}
            />
            <ClauseText isOpen={isOpen} onClick={onOpenPopover}>
              оговорку*
            </ClauseText>{' '}
            в договорах всей цепочки прослеживаемых организаций и давать
            бессрочное согласие ФНС РФ на признание сведений, составляющих
            налоговую тайну общедоступным для мгновенного выявления и
            доначисления за условно допущенные налоговые правонарушения со
            стороны контрагентов и партнеров клиента.
            <br />
            <br />
            Иными словами, занимаются посреднической деятельностью между
            государством и налогоплательщиком, при этом
            <br />
            не оказывая никакой поддержки и не беря на себя никакой
            ответственности за данный факт.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

const ClauseText = styled.span`
  font-weight: 600;
  cursor: pointer;
  ${(props) =>
    props.isOpen &&
    `
    text-decoration: underline;
    text-underline-offset: 3px;
  `}
`;
