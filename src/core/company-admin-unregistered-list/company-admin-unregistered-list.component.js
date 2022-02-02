import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import { text } from '../../lib/common/text';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';

import { CompanyAccountListListComponent } from './frame/company-admin-unregistered-list-list.component';
import { CompanyAdminUnregisteredListTypeSelectComponent } from './frame/company-admin-unregistered-list-type-select.component';

export function CompanyAdminUnregisteredListComponent(props) {
  const {
    data,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    onChangeType,
    type,
  } = props;
  return (
    <Paper>
      <Grid container spacing={4}>
        <Grid
          item
          container
          spacing={4}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          columns={{ xs: 1, lg: 5 }}
        >
          <Grid item xs={1} lg={3}>
            <Typography
              variant="heading"
              component="div"
              children={text(
                'COMPANY_ADMIN_LIST.UNREGISTERED_COMPANIES_LIST.TITLE',
              )}
            />
          </Grid>

          <Grid item xs={1} lg={2}>
            <CompanyAdminUnregisteredListTypeSelectComponent
              onChange={onChangeType}
              value={type}
            />
          </Grid>
        </Grid>

        <Grid item>
          <Divider />
        </Grid>

        {isSuccess && (
          <Grid item>
            <CompanyAccountListListComponent list={data} />
          </Grid>
        )}

        {isPending && (
          <Grid item>
            <SkeletonListComponent />
          </Grid>
        )}
        {isError && (
          <Grid item>
            <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}
