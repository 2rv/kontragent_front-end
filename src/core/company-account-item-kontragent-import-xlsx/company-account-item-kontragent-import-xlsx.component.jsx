import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import { text } from '../../lib/common/text';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';

import { CompanyAccountItemKontragentImportXlsxListComponent } from './frame/company-account-item-kontragent-import-xlsx-list.component';
import { CompanyAccountItemKontragentImportXlsxFieldComponent } from './frame/company-account-item-kontragent-import-xlsx-field.component';

export function CompanyAccountItemKontragentImportXlsxComponent(props) {
  const {
    onImport,
    onDelete,
    onUpdate,
    onSave,

    list,

    xslxIsPending,
    xslxIsSuccess,
    xslxtIsError,
    xslxtErrorMessage,

    isPending,
    isSuccess,
    isError,
    errorMessage,
  } = props;

  return (
    <Paper>
      <Grid
        container
        spacing={4}
        direction="row"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Grid item xs={6}>
          <Typography variant="title" children={text('Импорт контрагентов')} />
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12}>
          <CompanyAccountItemKontragentImportXlsxFieldComponent
            isPending={isPending || xslxIsPending}
            onImport={onImport}
            onSave={onSave}
            isEmptyList={!list?.length}
          />
        </Grid>

        {isPending && (
          <Grid item xs={12}>
            <LinearProgress />
          </Grid>
        )}

        {isSuccess && (
          <Grid item xs={12}>
            <Alert severity="success">{text('Успешно')}</Alert>
          </Grid>
        )}

        {isError && (
          <Grid item xs={12}>
            <Alert severity="error">{text(errorMessage)}</Alert>
          </Grid>
        )}

        {xslxIsPending && (
          <Grid item xs={12}>
            <SkeletonListComponent />
          </Grid>
        )}

        {!!list?.length && (
          <Grid item sx={{ flexGrow: 1 }} xs={12}>
            <CompanyAccountItemKontragentImportXlsxListComponent
              list={list}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}
