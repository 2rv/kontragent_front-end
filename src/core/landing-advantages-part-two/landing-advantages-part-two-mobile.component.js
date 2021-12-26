import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingAdvantagesPartTwoSectionMobileCompmponent } from './frame/landing-advantages-part-two-section-mobile.component';
import { PopoverComponent } from './frame/popover.component';

export function LandingAdvantagesPartTwoMobileComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const onOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onClosePopover = () => {
    setAnchorEl(null);
  };

  return (
    <Box gap="24px" sx={{ display: { xs: 'grid', md: 'none' } }}>
      <LandingAdvantagesPartTwoSectionMobileCompmponent
        image={`/static/img/landing/landing-advantages-part-two/image-1-mobile.svg`}
        title={`Почему стоит начать пользоваться нашей платформой?`}
        description={
          <SmallText variant="body1">
            Сегодня «письма счастья» или предпроверочные мероприятия невозможно заблаговременно спрогнозировать, а тем более угадать финансовые потери от потенциально планируемых претензий.<br/><br/>
            Сегодняшние реалии таковы, что в определенных контекстах крайне невыгодно предупреждать или сигнализировать налогоплательщику о его возможных допущенных нарушениях НК РФ,
            так как от этого будет зависеть объём средств истребованных в бюджет РФ.<br/><br/>
            Наша платформа как современный медицинский центр: диагностируем, выявляем проблемные места, назначаем «курс лечения», выводим из критической ситуации.<br/><br/>
          </SmallText>
        }
      />
      <LandingAdvantagesPartTwoSectionMobileCompmponent
        rowReverse={true}
        image={`/static/img/landing/landing-advantages-part-two/image-2-mobile.svg`}
        title={`Почему стоит начать именно сегодня и сейчас?`}
        description={
          <SmallText variant="body1">
            Платформа заранее позволяет с одной стороны минимизировать потенциальные доначисления, а с другой стороны предупредить о надвигающихся рисках со стороны
            недобросовестных партнеров и контрагентах. А самое главное дает драгоценное время на исправление ситуации!
          </SmallText>
        }
      />
      <LandingAdvantagesPartTwoSectionMobileCompmponent
        image={`/static/img/landing/landing-advantages-part-two/image-3-mobile.svg`}
        title={`Почему именно наша платформа?`}
        description={
          <SmallText variant="body1">
            Платформа уникальна и не имеет аналогов.<br/><br/>
            Наши возможные конкуренты заставляют подписывать налоговую{' '}
            <PopoverComponent
              anchorEl={anchorEl}
              visibility={Boolean(anchorEl)}
              onClosePopover={onClosePopover}
            />
            <span style={{ cursor: 'pointer', fontWeight: 600 }} onClick={onOpenPopover}>оговорку*</span>{' '}
            в договорах всей цепочки прослеживаемых организаций и давать бессрочное согласие ФНС РФ на признание сведений,
            составляющих налоговую тайну общедоступным для мгновенного выявления и доначисления за условно допущенные налоговые правонарушения со стороны контрагентов и партнеров клиента.<br/><br/>
            Иными словами, занимаются посреднической деятельностью между государством и налогоплательщиком, при этом не оказывая никакой поддержки и не беря на себя никакой ответственности за данный факт.
          </SmallText>
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
