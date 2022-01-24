import { Paper, Typography, Alert, Grid } from '@mui/material';
import { text } from '../../lib/common/text';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';
import { CompanyAccountKontragentInfoBasic } from './frame/company-account-kontragent-info-basic';
import { CompanyAccountKontragentInfoCompany } from './frame/company-account-kontragent-info-company';
import { COMPANY_ACCOUNT_KONTRAGENT_INFO_DATA_NAME } from './company-account-kontragent-info.constant';
import { CompanyAccountKontragentInfoDataContainer } from '../company-account-kontragent-info-data';

export function CompanyAccountKontragentInfoComponent(props) {
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
          <CompanyAccountKontragentInfoBasic
            kontragentId={data[COMPANY_ACCOUNT_KONTRAGENT_INFO_DATA_NAME.ID]}
            kontragentName={
              data[COMPANY_ACCOUNT_KONTRAGENT_INFO_DATA_NAME.KONTRAGENT_NAME]
            }
          />
        </Paper>
      </Grid>

      <Grid item>
        <Paper>
          <CompanyAccountKontragentInfoDataContainer />
        </Paper>
      </Grid>

      <Grid item>
        <Paper>
          <CompanyAccountKontragentInfoCompany
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
