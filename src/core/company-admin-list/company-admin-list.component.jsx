import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import { text } from '../../lib/common/text';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';

import { CompanyAdminListViewComponent } from './frame/company-admin-list-view.component';
import { CompanyAdminListFilterComponent } from './frame/company-admin-list-filter.component';

export function CompanyAdminListComponent(props) {
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
          children={text('COMPANY_ADMIN_LIST.TITLE')}
        />
      </Grid>

      <Grid item>
        <Divider />
      </Grid>

      <Grid item>
        <CompanyAdminListFilterComponent
          onChangeFilter={onChangeFilter}
          filterData={filterData}
        />
      </Grid>

      {isSuccess && (
        <Grid item>
          <CompanyAdminListViewComponent list={list} />
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
