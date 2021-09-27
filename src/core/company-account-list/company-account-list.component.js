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

import { redirect } from '../../main/navigation';

export function CompanyAccountListComponent({
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
          Мои компании
        </Typography>

        <Divider sx={{ mx: 8 }} />

        {isSuccess && <CompanyAccountListListComponent list={data.list} />}
        {isPending && <CompanyAccountListSkeletonComponent />}
        {isError && errorMessage}
      </Box>
    </Paper>
  );
}

const CompanyAccountListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ pt: 4, px: 8, pb: 8 }}>
        <Alert severity="info">Ваш список компаний пуст</Alert>
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
                  { companyId } = {
                    companyId: '[companyId]',
                  },
                ) => `/company/${companyId}/`,
                {
                  dynamic: true,
                  params: { companyId: item.id },
                },
              );
            }}
            key={key}
            button
            sx={{ py: 3, px: 3 }}
          >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={
                item.companyMember[0].role === 1 ? 'Владелец' : 'Сотрудник'
              }
            />
          </ListItem>
          {key !== list.length - 1 && <Divider />}
        </>
      ))}
    </List>
  );
};

const CompanyAccountListSkeletonComponent = ({ list }) => {
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
