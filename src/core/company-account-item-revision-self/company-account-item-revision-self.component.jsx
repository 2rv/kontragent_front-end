import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { redirect, getQuery } from '../../main/navigation/navigation.core';
import { text } from '../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_ROUTE_PATH_DYNAMIC } from '../company-account-item-revision-self-create/company-account-item-revision-self-create.constant';

export function CompanyAccountItemRevisionSelfComponent() {
  const handleClick = () => {
    redirect(COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_ROUTE_PATH_DYNAMIC, {
      params: {
        companyId: getQuery('companyId'),
      },
    });
  };
  return (
    <Paper>
      <Grid container spacing={4}>
        <Grid item>
          <Typography
            variant="title"
            component="div"
            children={text('COMPANY_ACCOUNT_ITEM_REVISION.SELF.TITLE')}
            sx={{ pb: 2 }}
          />
          <Typography
            variant="subTitle"
            component="div"
            children={text('COMPANY_ACCOUNT_ITEM_REVISION.SELF.DESCRIPTION')}
          />
        </Grid>

        <Grid item>
          <Button
            fullWidth
            onClick={handleClick}
            children={text('COMPANY_ACCOUNT_ITEM_REVISION.SELF.CREATE_BUTTON')}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
