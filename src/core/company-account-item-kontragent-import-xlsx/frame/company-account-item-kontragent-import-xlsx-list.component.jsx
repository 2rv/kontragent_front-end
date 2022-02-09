import { Fragment, useState } from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_XLSX_DATA_NAME as FIELD_NAME } from '../company-account-item-kontragent-import-xlsx.constant';
import { CompanyAccountItemKontragentImportXlsxUpdateDataComponent } from './company-account-item-kontragent-import-xlsx-update-data.component';

export function CompanyAccountItemKontragentImportXlsxListComponent(props) {
  const { list, onDelete, onUpdate } = props;

  const [data, setData] = useState({});

  const onCancelEdit = () => {
    setData({});
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const copy = { ...data };
    copy[name] = value;
    setData(copy);
  };

  const handleSave = () => {
    onUpdate(data);
    onCancelEdit();
  };

  return (
    <List>
      {list.map((item, index) => {
        const isEdit = data.index === index;

        const onClickItem = () => {
          if (isEdit) onCancelEdit();
          else
            setData({
              index,
              [FIELD_NAME.INN]: item[FIELD_NAME.INN],
              [FIELD_NAME.NAME]:
                item[FIELD_NAME.NAME] || `Компания ИНН ${item[FIELD_NAME.INN]}`,
            });
        };

        return (
          <Grid container spacing={3} key={index}>
            <Grid item>
              <ListItem
                disableGutters
                divider
                secondaryAction={
                  <Fragment>
                    <IconButton onClick={() => onDelete(index)}>
                      <DeleteIcon />
                    </IconButton>

                    <IconButton onClick={onClickItem}>
                      <EditIcon />
                    </IconButton>
                  </Fragment>
                }
              >
                <ListItemText
                  primary={item[FIELD_NAME.INN]}
                  secondary={
                    item[FIELD_NAME.NAME] ||
                    `Компания ИНН ${item[FIELD_NAME.INN]}`
                  }
                />
              </ListItem>
            </Grid>

            <Grid item>
              <Collapse in={isEdit} timeout="auto" unmountOnExit mountOnEnter>
                <CompanyAccountItemKontragentImportXlsxUpdateDataComponent
                  data={data}
                  onCancel={onCancelEdit}
                  handleSave={handleSave}
                  handleChange={handleChange}
                />
              </Collapse>
            </Grid>
          </Grid>
        );
      })}
    </List>
  );
}
