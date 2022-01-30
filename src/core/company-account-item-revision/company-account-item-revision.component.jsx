import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { redirect, getQuery } from '../../main/navigation/navigation.core';
import { text } from '../../lib/common/text';
import { COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ROUTE_PATH_DYNAMIC } from '../company-account-item-revision-create';
import { COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_ROUTE_PATH_DYNAMIC } from '../company-account-item-revision-self-create/company-account-item-revision-self-create.constant';

export function CompanyAccountItemRevisionCreateLink() {
  const handleClick = () => {
    redirect(COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ROUTE_PATH_DYNAMIC, {
      params: {
        companyId: getQuery('companyId'),
      },
    });
  };
  return (
    <Paper>
      <Box>
        <Box sx={{ pb: 4 }}>
          <Typography variant="title" sx={{ pb: 2 }} component="div">
            {text('COMPANY_ACCOUNT_ITEM_REVISION.REVISION_CREATE_INFO.TITLE')}
          </Typography>
          <Typography variant="subTitle" component="div">
            {text('COMPANY_ACCOUNT_ITEM_REVISION.REVISION_CREATE_INFO.INFO')}
          </Typography>
        </Box>
        <Grid container direction="row" justifyContent="flex-start">
          <Grid xs={12} lg={4} item>
            <Button
              fullWidth
              onClick={handleClick}
              children={text(
                'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_CREATE_INFO.BUTTON_TEXT',
              )}
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
export function CompanyAccountItemRevisionSelfCreateLink() {
  const handleClick = () => {
    redirect(COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_ROUTE_PATH_DYNAMIC, {
      params: {
        companyId: getQuery('companyId'),
      },
    });
  };
  return (
    <Paper>
      <Box>
        <Box sx={{ pb: 4 }}>
          <Typography
            variant="title"
            sx={{ pb: 2 }}
            component="div"
            children={text(
              'COMPANY_ACCOUNT_ITEM_REVISION.SELF_REVISION_CREATE_INFO.TITLE',
            )}
          />
          <Typography
            variant="subTitle"
            component="div"
            children={text(
              'COMPANY_ACCOUNT_ITEM_REVISION.SELF_REVISION_CREATE_INFO.INFO',
            )}
          />
        </Box>
        <Grid container direction="row" justifyContent="flex-start">
          <Grid xs={12} lg={4} item>
            <Button
              fullWidth
              onClick={handleClick}
              children={text(
                'COMPANY_ACCOUNT_ITEM_REVISION.SELF_REVISION_CREATE_INFO.BUTTON_TEXT',
              )}
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
