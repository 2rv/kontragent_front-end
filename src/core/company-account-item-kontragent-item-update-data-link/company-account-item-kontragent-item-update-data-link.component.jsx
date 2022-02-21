import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import { getQuery, redirect } from '../../main/navigation/navigation.core';
import { text } from '../../lib/common/text';
import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_UPDATE_DATA_ROUTE_PATH_DYNAMIC } from '../company-account-item-kontragent-item-update-data/company-account-item-kontragent-item-update-data.constant';

export function CompanyAccountItemKontragentItemUpdateDataLinkComponent(props) {
  const { kontragentId } = props;
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
  return (
    <Tooltip
      arrow
      componentsProps={{
        tooltip: { sx: { backgroundColor: '#3AB8FF' } },
        arrow: { sx: { color: '#3AB8FF' } },
      }}
      title={
        <Typography
          variant="body1"
          color="white"
          children={text(
            'Дополните информацию по контрагенту и получите до 5000 рублей на реферальный баланс - для того что бы дополнить информацию просто нажмите',
          )}
        />
      }
      children={
        <Button fullWidth onClick={handleClick}>
          <ErrorOutlineIcon sx={{ mr: 1 }} />
          {text('Дополнить информацию')}
        </Button>
      }
    />
  );
}
