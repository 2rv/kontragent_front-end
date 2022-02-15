import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FieldSelectComponent } from '../../../lib/common/field-select/field-select.component';
import { COMPANY_TYPE } from '../company-admin-unregistered-list.constant';

export function CompanyAdminUnregisteredListFilterComponent(props) {
  const { onChangeFilter, filterData } = props;
  return (
    <Grid container spacing={2}>
      <Grid item>
        <FieldSelectComponent
          onChange={handleChangeFilterSelect(NEWS_ADMIN_LIST_DATA_NAME.LANG)}
          option={NEWS_LANG_OPTION}
          label={<TextComponent tid="NEWS.ADMIN.PAGINATION.LANG" />}
        />
      </Grid>
    </Grid>
  );
}
