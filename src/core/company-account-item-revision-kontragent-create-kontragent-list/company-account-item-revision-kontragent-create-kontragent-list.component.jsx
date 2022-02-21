import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';

import { text } from '../../lib/common/text';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';

import { CompanyAccountItemRevisionKontragentCreateKontragentListViewComponent } from './frame/company-account-item-revision-kontragent-create-kontragent-list-view.component';
import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_KONTRAGENT_LIST_DATA_NAME as DATA_NAME } from './company-account-item-revision-kontragent-create-kontragent-list.constant';
import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME as FIELD_NAME } from '../company-account-item-revision-kontragent-create/company-account-item-revision-kontragent-create.constant';
import { CompanyAccountItemKontragentItemUpdateDataLinkComponent } from '../company-account-item-kontragent-item-update-data-link/company-account-item-kontragent-item-update-data-link.component';

export function CompanyAccountItemRevisionKontragentCreateKontragentListComponent(
  props,
) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    data,
    errorMessage,
    index,
    setFieldValue,
    value,
    errors,
    touched,
  } = props;

  const prefix = `${FIELD_NAME.KONTRAGENTS}.${index}.`;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (value) => {
    setFieldValue(prefix + FIELD_NAME.INN, value[DATA_NAME.INN]);
    setFieldValue(prefix + FIELD_NAME.NAME, value[DATA_NAME.NAME]);
    setFieldValue(prefix + FIELD_NAME.KONTRAGENT_ID, value[DATA_NAME.ID]);
    handleClose();
  };

  const kontragentError =
    errors[FIELD_NAME.KONTRAGENTS]?.[index]?.[FIELD_NAME.KONTRAGENT_ID] &&
    touched[FIELD_NAME.KONTRAGENTS]?.[index]?.[FIELD_NAME.KONTRAGENT_ID] &&
    errors[FIELD_NAME.KONTRAGENTS]?.[index]?.[FIELD_NAME.KONTRAGENT_ID];

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      spacing={4}
      columns={{ xs: 1, md: 4 }}
    >
      <Grid item xs={1} md={2}>
        <Button
          fullWidth
          variant="black"
          onClick={handleOpen}
          children={'Выбрать контрагента'}
        />
      </Grid>

      {typeof value[FIELD_NAME.KONTRAGENT_ID] === 'number' && (
        <Grid item xs={1} md={2}>
          <CompanyAccountItemKontragentItemUpdateDataLinkComponent
            kontragentId={value[FIELD_NAME.KONTRAGENT_ID]}
          />
        </Grid>
      )}

      {kontragentError && (
        <Grid item xs={1}>
          <Alert
            severity="error"
            children={text('Необходимо выбрать контрагента')}
          />
        </Grid>
      )}

      <Grid item xs={1}>
        <Typography
          variant="listTitle"
          component="div"
          children={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_INFO.FORM.FIELD.LABELS.COMPANY_NAME',
          )}
        />
        <Typography
          variant="listContent"
          component="div"
          children={value[FIELD_NAME.NAME] || text('Выберите контрагента')}
        />
      </Grid>

      <Grid item xs={1}>
        <Typography
          variant="listTitle"
          component="div"
          children={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_INFO.FORM.FIELD.LABELS.INN',
          )}
        />
        <Typography
          variant="listContent"
          component="div"
          children={value[FIELD_NAME.INN] || text('Выберите контрагента')}
        />
      </Grid>

      {isError && (
        <Grid item xs={1}>
          <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
        </Grid>
      )}
      <Dialog
        PaperProps={{ sx: { p: 0 } }}
        fullScreen
        open={open}
        onClose={handleClose}
      >
        <AppBar sx={{ p: 0, position: 'relative' }}>
          <Toolbar>
            <Typography sx={{ flex: 1 }} component="div" children={'Тайтл'} />
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Grid container spacing={4}>
          {isSuccess && (
            <Grid item>
              <CompanyAccountItemRevisionKontragentCreateKontragentListViewComponent
                list={data.list}
                onChange={onChange}
              />
            </Grid>
          )}

          {isPending && (
            <Grid item>
              <SkeletonListComponent />
            </Grid>
          )}
        </Grid>
      </Dialog>
    </Grid>
  );
}
