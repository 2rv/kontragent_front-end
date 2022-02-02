import { Fragment, useState } from 'react';
import { text } from '../../lib/common/text';
import {
  Paper,
  Divider,
  Typography,
  Input,
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
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';
import { ListChangeForm } from '../../lib/common/list-change-form';
import { CompanyAdminImportTypeSelectComponent } from './company-admin-import-type-select.component';

export function CompanyAdminImportComponent(props) {
  const {
    onSave,
    onDelete,
    onChange,
    onChangeList,
    state: { pending, success, error, xslxPending, xslxError, data },
    dataFields,
    onChangeType,
    type,
  } = props;

  const [edit, setEdit] = useState({});
  return (
    <Paper>
      <Grid container spacing={4}>
        <Grid item>
          <Typography variant="title" children={text('Импорт компаний')} />
        </Grid>

        <Grid item>
          <Divider />
        </Grid>

        <Grid item>
          <Button variant="contained" component="label">
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
        </Grid>

        <Grid item>
          {xslxPending && <SkeletonListComponent text={true} />}

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
                        {item.review ? (
                          <ListItemText primary={item.review} />
                        ) : (
                          <Alert
                            severity="error"
                            variant="outlined"
                            children={text('Необходимо наличие review')}
                          />
                        )}
                      </div>
                    </ListItem>

                    <Collapse in={isEdit} timeout="auto" unmountOnExit>
                      <ListChangeForm
                        item={edit}
                        onSubmit={onChangeList}
                        onCancel={() => setEdit({})}
                        dataFields={dataFields}
                      />
                    </Collapse>
                  </Box>
                  <Divider />
                </Fragment>
              );
            })}
          </List>
        </Grid>

        {data.length ? (
          <Grid
            item
            container
            spacing={2}
            direction="row"
            justifyContent="flex-start"
          >
            <Grid item xs>
              <Button
                onClick={onSave}
                disabled={pending}
                variant="contained"
                color="success"
                fullWidth
                children={'Импортировать'}
              />
            </Grid>

            <Grid item xs>
              <CompanyAdminImportTypeSelectComponent
                onChange={onChangeType}
                value={type}
              />
            </Grid>
          </Grid>
        ) : null}

        {pending && (
          <Grid item>
            <CircularProgress />
          </Grid>
        )}

        {success && (
          <Grid item>
            <Alert severity="success">{text('Успешно')}</Alert>
          </Grid>
        )}

        {error && error.length && (
          <Grid item>
            <Alert severity="error">
              {text('Необходимо наличие ИНН и Review')}
            </Alert>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}
