import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import { Formik } from 'formik';
import { text } from '../../lib/common/text';

import { CompanyAccountItemKontragentCreateFormComponent } from './frame/company-account-item-kontragent-create-form.component';

export function CompanyAccountItemKontragentCreateComponent(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    initialValue,
    validation,
    onSubmitForm,
  } = props;
  return (
    <Paper>
      <Grid container spacing={4}>
        <Grid
          item
          display="flex"
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-end"
          zIndex={0}
        >
          <Typography
            variant="title"
            children={text('COMPANY_ACCOUNT_KONTRAGENTS.FORM.TITLE')}
          />

          <Tooltip
            arrow
            componentsProps={{
              tooltip: { sx: { backgroundColor: '#3AB8FF' } },
              arrow: { sx: { color: '#3AB8FF' } },
            }}
            title={
              <Typography
                variant="body1"
                color="white"
                children={text(
                  'Введите желаемое название компании вашего контрагента - это название будет видно только вам!',
                )}
              />
            }
            children={
              <HelpOutlineOutlinedIcon sx={{ ml: 1 }} fontSize="small" />
            }
          />
        </Grid>

        <Grid item>
          <Typography
            variant="subTitle"
            children={text('COMPANY_ACCOUNT_KONTRAGENTS.FORM.SUBTITLE')}
          />
        </Grid>

        <Grid item>
          <Divider />
        </Grid>

        <Grid item>
          <Formik
            enableReinitialize
            initialValues={initialValue}
            validate={validation}
            onSubmit={onSubmitForm}
          >
            {(props) => (
              <CompanyAccountItemKontragentCreateFormComponent
                {...props}
                pageLoading={pageLoading}
              />
            )}
          </Formik>
        </Grid>

        {isError && (
          <Grid item>
            <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
          </Grid>
        )}

        {isSuccess && (
          <Grid item>
            <Alert severity="success">
              {text('COMPANY_ACCOUNT_KONTRAGENTS.FORM.SUCCESS')}
            </Alert>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}
