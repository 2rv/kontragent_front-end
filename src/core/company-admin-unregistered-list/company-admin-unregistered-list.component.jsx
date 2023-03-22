import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import { text } from '../../lib/common/text';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';

import { CompanyAdminUnregisteredListViewComponent } from './frame/company-admin-unregistered-list-view.component';
import { CompanyAdminUnregisteredListFilterComponent } from './frame/company-admin-unregistered-list-filter.component';

export function CompanyAdminUnregisteredListComponent(props) {
  const {
    isPending,
    isSuccess,
    isError,
    errorMessage,
    list,
    onChangeFilter,
    filterData,
  } = props;

  return (
    <Grid container spacing={4}>
      <Grid item>
        <Typography
          variant="heading"
          component="div"
          children={text(
            'COMPANY_ADMIN_LIST.UNREGISTERED_COMPANIES_LIST.TITLE',
          )}
        />
      </Grid>

      <Grid item>
        <Divider />
      </Grid>

      <Grid item>
        <CompanyAdminUnregisteredListFilterComponent
          onChangeFilter={onChangeFilter}
          filterData={filterData}
        />
      </Grid>

      {isSuccess && (
        <Grid item>
          <CompanyAdminUnregisteredListViewComponent list={list} />
        </Grid>
      )}

      {isPending && (
        <Grid item>
          <SkeletonListComponent />
        </Grid>
      )}

      {isError && (
        <Grid item>
          <Alert severity="error" children={text(`ERROR.${errorMessage}`)} />
        </Grid>
      )}
    </Grid>
  );
}
