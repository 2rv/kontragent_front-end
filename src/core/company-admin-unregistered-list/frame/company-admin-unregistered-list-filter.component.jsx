import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import { COMPANY_TYPE_OPTIONS } from '../../../lib/common/company/company.type';
import { FieldSelectComponent } from '../../../lib/common/field-select/field-select.component';
import { COMPANY_ADMIN_UNREGISTERED_LIST_DATA_NAME as DATA_NAME } from '../company-admin-unregistered-list.constant';

export function CompanyAdminUnregisteredListFilterComponent(props) {
  const { onChangeFilter, filterData } = props;

  const paginationCount = Math.ceil(filterData.count / filterData.take);
  const paginationPage = Math.ceil(filterData.skip / filterData.take + 1);

  const handleChangeFilterSelect = (e) => {
    const { name, value } = e.target;
    onChangeFilter({
      ...filterData,
      [name]: value,
    });
  };

  const handleChangePagination = (_, value) => {
    onChangeFilter({
      ...filterData,
      [DATA_NAME.SKIP]: filterData.take * value - filterData.take,
    });
  };

  return (
    <Grid
      container
      spacing={4}
      direction="row"
      alignItems="flex-start"
      justifyContent="space-beetwen"
    >
      <Grid item xs={12} md>
        <Pagination
          count={paginationCount}
          page={paginationPage}
          onChange={handleChangePagination}
        />
      </Grid>

      <Grid item xs={12} md="auto">
        <FieldSelectComponent
          onChange={handleChangeFilterSelect}
          name={DATA_NAME.TYPE}
          value={filterData.type}
          options={COMPANY_TYPE_OPTIONS}
        />
      </Grid>
    </Grid>
  );
}
