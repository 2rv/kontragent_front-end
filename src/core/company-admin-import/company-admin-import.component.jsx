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

export function CompanyAdminImportComponent(props) {
  const {
    onSave,
    onDelete,
    onChange,
    onChangeList,
    state: { pending, success, error, xslxPending, xslxError, data },
    dataFields,
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
          {/* <label htmlFor="company-admin-import-file-input">
            <Input
              hidden
              accept="image/*"
              id="company-admin-import-file-input"
              type="file"
              onChange={onChange}
            />
            <Button
              variant="contained"
              component="span"
              children={text('Импорт')}
            />
          </label> */}

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
          <Grid item>
            <Button
              onClick={onSave}
              disabled={pending}
              variant="contained"
              color="success"
            >
              Импортировать
            </Button>
          </Grid>
        ) : null}

        {pending && (
          <Grid item>
            <CircularProgress />
          </Grid>
        )}

        <Grid item>
          {success && <Alert severity="success">{text('Успешно')}</Alert>}
          {error && error.length && (
            <Alert severity="error">
              {text('Необходимо наличие ИНН и Review')}
            </Alert>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}
