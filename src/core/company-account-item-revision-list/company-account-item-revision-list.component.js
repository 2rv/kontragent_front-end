import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageIcon from '@mui/icons-material/Image';
import Alert from '@mui/material/Alert';
import Skeleton from '@mui/material/Skeleton';

import { getQuery, redirect } from '../../main/navigation';

export function CompanyAccountItemRevisionListComponent({
  data,
  pageLoading,
  isPending,
  isError,
  isSuccess,
  errorMessage,
}) {
  return (
    <Paper sx={{ p: 0 }}>
      <Box>
        <Typography
          variant="heading"
          sx={{ px: 8, pt: 8, pb: 4 }}
          component="div"
        >
          Мои проверки контрагентов
        </Typography>

        <Divider sx={{ mx: 8 }} />

        {isSuccess && (
          <CompanyAccountItemRevisionListListComponent list={data.list} />
        )}
        {isPending && <CompanyAccountItemRevisionListSkeletonComponent />}
        {isError && errorMessage}
      </Box>
    </Paper>
  );
}

const CompanyAccountItemRevisionListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ py: 4, px: 8 }}>
        <Alert severity="info">Ваш список проверок пуст</Alert>
      </Box>
    );
  }

  return (
    <List sx={{ px: 8, pb: 8 }} disablePadding>
      {list.map((item, key) => (
        <>
          <ListItem
            onClick={() => {
              return redirect(
                (
                  { companyId, revisionId } = {
                    companyId: '[companyId]',
                    revisionId: '[revisionId]',
                  },
                ) => `/company/${companyId}/revision/${revisionId}`,
                {
                  dynamic: true,
                  params: {
                    revisionId: item.id,
                    companyId: getQuery('companyId'),
                  },
                },
              );
            }}
            key={key}
            button
            sx={{ py: 3, px: 3 }}
          >
            <ListItemText
              primary={item.title}
              secondary={
                [
                  '',
                  'Новая заявка',
                  'В процессе',
                  'Выполнено',
                  'Требуется доплата',
                ][item.status]
              }
            />
          </ListItem>
          {key !== list.length - 1 && <Divider />}
        </>
      ))}
    </List>
  );
};

const CompanyAccountItemRevisionListSkeletonComponent = ({ list }) => {
  return (
    <Box sx={{ py: 4, px: 8 }}>
      {[1, 2, 3].map((item, key) => (
        <Box key={key} sx={{ py: 1 }}>
          <Skeleton variant="rectangular" sx={{ height: '60px' }} />
        </Box>
      ))}
    </Box>
  );
};
