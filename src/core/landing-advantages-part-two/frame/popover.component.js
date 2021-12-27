import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export function PopoverComponent({ anchorEl, visibility, onClosePopover }) {
  return (
    <Popover
      open={visibility}
      onClose={onClosePopover}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      sx={{
        '.MuiPopover-paper': {
          padding: 4,
        },
      }}
    >
      <Typography
        sx={{
          maxWidth: '500px',
          color: '#707070',
          fontSize: { xs: '10px', lg: 'inherit' },
        }}
      >
        * «Налоговая оговорка» – особое условие договора, которое является действенным инструментом финансовой и имущественной защиты добросовестного заказчика от налоговых последствий за действия
        (бездействие) третьих лиц по выполнению обязанности уплаты налогов, в случае установления претензий со стороны налоговых органов.
        <br /><br />
        Это условие предотвращает имущественные потери добросовестного заказчика, а также включает в себя механизм (средство) распределения возможных экономических рисков в обязательстве
        (защитные договорные конструкции) в соответствии со ст. 406.1 ГК РФ и позволяет взыскать с поставщика сумму не примененного вычета в качестве имущественной потери.
      </Typography>
    </Popover>
  );
}
