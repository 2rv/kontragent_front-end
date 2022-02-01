import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import { text } from '../../lib/common/text';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';

import { CompanyAccountItemKontragentItemKonturContainer } from '../company-account-item-kontragent-item-kontur';

import { CompanyAccountItemKontragentItemInfoBasic } from './frame/company-account-item-kontragent-item-info-basic';
import { CompanyAccountItemKontragentItemInfoCompany } from './frame/company-account-item-kontragent-item-info-company';
import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME } from './company-account-item-kontragent-item-info.constant';

export function CompanyAccountItemKontragentItemInfoComponent(props) {
  const {
    data,
    isPending,
    isError,
    errorMessage,
    isRemovePending,
    removeKontragent,
  } = props;

  return (
    <Grid container spacing={6}>
      <Grid item>
        <Typography variant="heading" component="div">
          {text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.TITLE')}
        </Typography>
      </Grid>

      <Grid item>
        <Paper>
          <CompanyAccountItemKontragentItemInfoBasic
            kontragentId={
              data[COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.ID]
            }
            kontragentName={
              data[
                COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME
                  .KONTRAGENT_NAME
              ]
            }
          />
        </Paper>
      </Grid>

      <Grid item>
        <Paper>
          <CompanyAccountItemKontragentItemKonturContainer />
        </Paper>
      </Grid>

      <Grid item>
        <Paper>
          <CompanyAccountItemKontragentItemInfoCompany
            data={data}
            removeKontragent={removeKontragent}
            isRemovePending={isRemovePending}
          />
        </Paper>
      </Grid>

      {isPending && (
        <Grid item>
          <Paper>
            <SkeletonListComponent text={true} />
          </Paper>
        </Grid>
      )}

      {isError && (
        <Grid item>
          <Paper>
            <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
          </Paper>
        </Grid>
      )}
    </Grid>
  );
}
