import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { redirect, getQuery } from '../../main/navigation/navigation.core';
import { text } from '../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_ROUTE_PATH_DYNAMIC } from '../company-account-item-revision-kontragent-create/company-account-item-revision-kontragent-create.constant';

export function CompanyAccountItemRevisionKontragentComponent() {
  const handleClick = () => {
    redirect(
      COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_ROUTE_PATH_DYNAMIC,
      {
        params: {
          companyId: getQuery('companyId'),
        },
      },
    );
  };
  return (
    <Paper>
      <Grid container spacing={4} direction="row" justifyContent="flex-start">
        <Grid item>
          <Typography
            variant="title"
            component="div"
            children={text(
              'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_CREATE_INFO.TITLE',
            )}
            sx={{ pb: 2 }}
          />
          <Typography
            variant="subTitle"
            component="div"
            children={text(
              'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_CREATE_INFO.INFO',
            )}
          />
        </Grid>

        <Grid item xs={12} lg={4}>
          <Button
            fullWidth
            onClick={handleClick}
            children={text(
              'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_CREATE_INFO.BUTTON_TEXT',
            )}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
