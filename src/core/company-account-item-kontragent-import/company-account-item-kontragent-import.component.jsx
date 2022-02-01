import { Fragment, useState } from 'react';
import {
  Paper,
  Divider,
  Typography,
  Button,
  Grid,
  Box,
  Alert,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Collapse,
  CircularProgress,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { text } from '../../lib/common/text';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';
import { ListChangeForm } from '../../lib/common/list-change-form';
import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_RENDER_FIELD } from './company-account-item-kontragent-import.constant';

export function CompanyAccountItemKontragentImportComponent(props) {
  const {
    importIsPending,
    importIsSuccess,
    importIsError,
    importErrorMessage,
    data,
    IsPending,
    IsSuccess,
    IsError,
    errorMessage,
    onSave,
    onDelete,
    onChange,
    onChangeList,
  } = props;
  const [edit, setEdit] = useState({});

  return (
    <Paper>
      <Grid container spacing={4}>
        <Grid item>
          <Typography variant="title" children={text('Импорт контрагентов')} />
        </Grid>

        <Grid item>
          <Divider />
        </Grid>

        {importIsPending && (
          <Grid item>
            <SkeletonListComponent text={true} />
          </Grid>
        )}

        <Grid item>
          {data.length ? (
            <List>
              {data.map((item, index) => {
                const isEdit = edit.index === index;
                return (
                  <Fragment key={index}>
                    <Box>
                      <ListItem
                        sx={{ pl: 0 }}
                        secondaryAction={
                          <Fragment>
                            <IconButton
                              onClick={() => {
                                if (isEdit) {
                                  setEdit({});
                                } else {
                                  setEdit({ index, ...item });
                                }
                              }}
                            >
                              <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => onDelete(index)}>
                              <DeleteIcon />
                            </IconButton>
                          </Fragment>
                        }
                      >
                        <div>
                          <ListItemText primary={item.inn} />
                          <ListItemText
                            primary={item.name || `Компания ИНН ${item.inn}`}
                          />
                        </div>
                      </ListItem>

                      <Collapse in={isEdit} timeout="auto" unmountOnExit>
                        <ListChangeForm
                          item={edit}
                          onSubmit={onChangeList}
                          onCancel={() => setEdit({})}
                          dataFields={
                            COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_RENDER_FIELD
                          }
                        />
                      </Collapse>
                    </Box>
                    <Divider />
                  </Fragment>
                );
              })}
            </List>
          ) : (
            <Button variant="contained" component="label" fullWidth>
              {text('Импорт')}
              <input
                onChange={(e) => {
                  onChange(e);
                  e.target.value = '';
                }}
                type="file"
                hidden
              />
            </Button>
          )}
        </Grid>

        {!!data.length && (
          <Grid item>
            <Button
              onClick={onSave}
              disabled={IsPending || importIsPending}
              variant="contained"
              color="success"
            >
              Импортировать
            </Button>
          </Grid>
        )}

        {IsPending && (
          <Grid item>
            <CircularProgress />
          </Grid>
        )}
        {IsSuccess && (
          <Grid item>
            <Alert severity="success">{text('Успешно')}</Alert>
          </Grid>
        )}
        {importIsError && (
          <Grid item>
            <Alert severity="error">{text(importErrorMessage)}</Alert>
          </Grid>
        )}
        {IsError && (
          <Grid item>
            <Alert severity="error">{text(errorMessage)}</Alert>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}
