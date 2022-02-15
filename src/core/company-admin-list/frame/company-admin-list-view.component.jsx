import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Alert from '@mui/material/Alert';

import { redirect } from '../../../main/navigation';
import { text } from '../../../lib/common/text';

import { COMPANY_ADMIN_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC } from '../../company-admin-item-revision-list';
import { COMPANY_ADMIN_LIST_DATA_NAME as DATA_NAME } from '../company-admin-list.constant';

export function CompanyAdminListViewComponent(props) {
  const { list } = props;

  if (!list || list.length === 0) {
    return (
      <Alert
        severity="info"
        children={text('COMPANY_ADMIN_LIST.COMPANY_LIST.EMPTY')}
      />
    );
  }

  const handleClick = (companyId) => () => {
    redirect(COMPANY_ADMIN_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC, {
      params: {
        companyId: companyId,
      },
    });
  };

  return (
    <List>
      {list.map((item, index) => (
        <ListItem
          key={index}
          button
          divider={list.length - 1 !== index}
          onClick={handleClick(item[DATA_NAME.ID])}
        >
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>

          <ListItemText
            primary={text(
              '$t(COMMON.COMPANY.ID), $t(COMMON.COMPANY.INN), $t(COMMON.COMPANY.COMPANY_NAME)',
              {
                id: item[DATA_NAME.ID],
                inn: item[DATA_NAME.INN],
                name: item[DATA_NAME.NAME],
              },
            )}
            secondary={text(
              '$t(COMMON.COMPANY.BALANCE_VERIFICATION), $t(COMMON.COMPANY.DATA_VERIFICATION), $t(COMMON.COMPANY.BALANCE) $t(COMMON.CURRENCY.RUB)',
              {
                balance: item[DATA_NAME.AMOUNT],
                dataStatus: item[DATA_NAME.VERIFICATE_INFO]
                  ? '$t(COMMON.COMPANY.VERIFIED)'
                  : '$t(COMMON.COMPANY.NOT_VERIFIED)',
                balanceStatus: item[DATA_NAME.VERIFICATE_PAYMENT]
                  ? '$t(COMMON.COMPANY.VERIFIED)'
                  : '$t(COMMON.COMPANY.NOT_VERIFIED)',
              },
            )}
          />
        </ListItem>
      ))}
    </List>
  );
}
