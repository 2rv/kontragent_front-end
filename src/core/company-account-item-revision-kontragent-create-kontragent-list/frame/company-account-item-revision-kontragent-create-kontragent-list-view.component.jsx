import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import { text } from '../../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_KONTRAGENT_LIST_DATA_NAME } from '../company-account-item-revision-kontragent-create-kontragent-list.constant';

export function CompanyAccountItemRevisionKontragentCreateKontragentListViewComponent(
  props,
) {
  const { list, onChange } = props;

  if (!list.length) {
    return (
      <Box sx={{ px: 8, pb: 8 }}>
        <Alert severity="info">
          {text('COMPANY_ACCOUNT_KONTRAGENTS.LIST_EMPTY')}
        </Alert>
      </Box>
    );
  }

  const handleClickItem = (kontragent) => () => {
    onChange(kontragent);
  };

  return (
    <List>
      {list.map((item) => (
        <ListItem
          onClick={handleClickItem(item)}
          button
          key={
            item[
              COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_KONTRAGENT_LIST_DATA_NAME
                .ID
            ]
          }
          sx={{
            py: 3,
            px: 3,
            ':hover': {
              backgroundColor: '#F3F3F3',
            },
          }}
        >
          <ListItemText
            primary={
              item[
                COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_KONTRAGENT_LIST_DATA_NAME
                  .NAME
              ]
            }
            secondary={
              <Typography
                sx={{
                  color: '#252525',
                }}
                variant="listContent"
                children={
                  item[
                    COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_KONTRAGENT_LIST_DATA_NAME
                      .INN
                  ]
                }
              />
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
