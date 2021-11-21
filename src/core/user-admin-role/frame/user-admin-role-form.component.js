import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { text } from '../../../lib/common/text';
import { USER_ADMIN_ROLE_DATA_NAME } from '../user-admin-role.constant';
import { AdminSelectElement } from './admin-select.element';

export const UserAdminRoleFormComponent = (props) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    isPending,
    pageLoading,
  } = props;

  const isSubmitDisabled = () => {
    return isPending || pageLoading;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ py: 4 }}>
        <Grid
          spacing={3}
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <Grid lg={6} xs={12} gutterBottom item>
            <AdminSelectElement
              label={text('USER_ADMIN_ROLE.SELECT.LABEL')}
              sx={{
                height: '45px',
              }}
              name={USER_ADMIN_ROLE_DATA_NAME.ROLE}
              value={values[USER_ADMIN_ROLE_DATA_NAME.ROLE]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid item lg={6} xs={12} sx={{ mt: 6 }}>
            <Button fullWidth type="sumbit" disabled={isSubmitDisabled()}>
              {text('USER_ADMIN_ROLE.BUTTON.CHOOSE')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
