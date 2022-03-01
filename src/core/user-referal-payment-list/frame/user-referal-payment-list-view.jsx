import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Alert from '@mui/material/Alert';
import { text } from '../../../lib/common/text';
import { USER_REFERAL_PAYMENT_LIST_DATA_NAME as DATA_NAME } from '../user-referal-payment-list.constant';

export function UserReferalPaymentListListComponent(props) {
  const { list } = props;

  if (!list?.length) {
    return (
      <Alert
        severity="info"
        children={text('USER_REFERAL.USER_REFERAL_PAYMENT_LIST.EMPTY')}
      />
    );
  }

  return (
    <List>
      {list.map((item, key) => (
        <ListItem disableGutters key={key} divider={list.length - 1}>
          <ListItemText
            primary={item[DATA_NAME.TYPE]?.text}
            secondary={text(
              '{{typeTransaction}} - {{price}}$t(COMMON.CURRENCY.RUB)',
              {
                typeTransaction:
                  item[DATA_NAME.TYPE]?.status > 1 ? 'Списание' : 'Пополнение',
                price: item[DATA_NAME.AMOUNT],
              },
            )}
            secondaryTypographyProps={{
              color: item[DATA_NAME.TYPE]?.status > 1 ? 'red' : 'green',
            }}
          />
        </ListItem>
      ))}
    </List>
  );
}
