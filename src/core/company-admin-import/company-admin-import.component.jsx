import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';

import { text } from '../../lib/common/text';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';

import { CompanyAdminImportFieldComponent } from './frame/company-admin-import-field.component';
import { CompanyAdminImportListComponent } from './frame/company-admin-import-list.component';
import { CompanyAdminImportUpdateTypeComponent } from './frame/company-admin-import-update-type.component';

export function CompanyAdminImportComponent(props) {
  const {
    onSave,
    onResetChunk,
    onDelete,
    onChange,
    onChangeList,
    state: {
      pending,
      success,
      error,
      xslxPending,
      xslxError,
      data,
      progress,
      currentChunk,
    },
    onChangeType,
    type,
  } = props;

  return (
    <Grid
      container
      spacing={4}
      direction="row"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Grid item xs={6}>
        <Typography variant="title" children={text('Импорт компаний')} />
      </Grid>

      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid item xs={12}>
        <CompanyAdminImportFieldComponent
          isPending={pending || xslxPending}
          onChange={onChange}
        />
      </Grid>

      <Grid item xs={6}>
        <Button
          fullWidth
          onClick={onSave}
          disabled={pending}
          variant="contained"
          color="success"
          children={'Импортировать'}
          disabled={pending || xslxPending || !data?.length}
        />
      </Grid>

      <Grid item xs={6}>
        <CompanyAdminImportUpdateTypeComponent
          onChange={onChangeType}
          value={type}
        />
      </Grid>

      {!!currentChunk && (
        <Grid item xs={6}>
          <Button
            fullWidth
            onClick={onResetChunk}
            disabled={pending}
            variant="contained"
            children={'Сбросить прогресс'}
            disabled={pending || xslxPending || !data?.length}
          />
        </Grid>
      )}

      {pending && (
        <Grid item xs={12}>
          <LinearProgress variant="determinate" value={progress} />
        </Grid>
      )}

      {success && (
        <Grid item xs={12}>
          <Alert severity="success">{text('Успешно')}</Alert>
        </Grid>
      )}

      {(error || error?.length) && (
        <Grid item xs={12}>
          <Alert severity="error">{text(error)}</Alert>
        </Grid>
      )}

      {xslxPending && (
        <Grid item xs={12}>
          <SkeletonListComponent />
        </Grid>
      )}

      {!!data?.length && (
        <Grid item sx={{ flexGrow: 1 }} xs={12}>
          <CompanyAdminImportListComponent
            onDelete={onDelete}
            list={data}
            onUpdate={onChangeList}
          />
        </Grid>
      )}
    </Grid>
  );
}
