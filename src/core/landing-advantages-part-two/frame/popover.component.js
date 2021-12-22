import React from 'react';
import Popover from '@mui/material/Popover';
import { Typography } from '@mui/material';

export function PopoverComponent({ anchorEl, visibility, onClosePopover }) {
  return (
    <Popover
      open={visibility}
      onClose={onClosePopover}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Typography sx={{ maxWidth: '500px' }}>
        * «Налоговая оговорка» – особое условие договора, которое является действенным инструментом финансовой и имущественной защиты добросовестного заказчика от налоговых последствий за действия
        (бездействие) третьих лиц по выполнению обязанности уплаты налогов, в случае установления претензий со стороны налоговых органов.
        Это условие предотвращает имущественные потери добросовестного заказчика, а также включает в себя механизм (средство) распределения возможных экономических рисков в обязательстве
        (защитные договорные конструкции) в соответствии со ст. 406.1 ГК РФ и позволяет взыскать с поставщика сумму не примененного вычета в качестве имущественной потери.
      </Typography>
    </Popover>
  );
}
