import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import { getQuery, redirect } from '../../main/navigation/navigation.core';
import { text } from '../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_UPDATE_DATA_ROUTE_PATH_DYNAMIC } from '../company-account-item-kontragent-item-update-data/company-account-item-kontragent-item-update-data.constant';

export function CompanyAccountItemKontragentItemUpdateDataLinkComponent(props) {
  const { kontragentId, isPending } = props;
  const id = kontragentId || getQuery('kontragentId');

  const handleClick = () => {
    const companyId = getQuery('companyId');
    redirect(
      COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_UPDATE_DATA_ROUTE_PATH_DYNAMIC,
      {
        params: {
          companyId: companyId,
          kontragentId: id,
        },
      },
    );
  };
  if (!id) {
    return null;
  }

  if (isPending) {
    return <Skeleton variant="rectangular" sx={{ height: '60px' }} />;
  }

  return (
    <Grid container spacing={4} direction="row" justifyContent="flex-start">
      <Grid item xs={12}>
        <Typography
          variant="title"
          component="div"
          children={text('Дополнить информацию по контрагенту')}
          sx={{ pb: 2 }}
        />
        <Typography
          variant="subTitle"
          component="div"
          children={text(
            'За заполнение данных вы получите бонус 5000₽ на реферальный баланс ',
          )}
        />
      </Grid>

      <Grid item xs={12} lg={4}>
        <Button fullWidth onClick={handleClick} children={text('Дополнить')} />
      </Grid>
    </Grid>
  );
}
