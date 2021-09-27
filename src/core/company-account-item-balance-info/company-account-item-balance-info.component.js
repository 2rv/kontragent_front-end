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

export function CompanyAccountItemBalanceInfoComponent({
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
          variant="title"
          sx={{ px: 8, pt: 8, pb: 4 }}
          component="div"
        >
          Баланс компании
        </Typography>

        <Divider sx={{ mx: 8 }} />

        {isSuccess && (
          <CompanyAccountItemBalanceInfoListComponent data={data} />
        )}
        {isPending && <CompanyAccountItemBalanceInfoSkeletonComponent />}
        {isError && errorMessage}
      </Box>
    </Paper>
  );
}

const CompanyAccountItemBalanceInfoListComponent = ({ data }) => {
  return (
    <Grid container spacing={3} sx={{ pt: 4, px: 8, pb: 8 }}>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          Баланс компании:
        </Typography>
        <Typography variant="listContent">{data.amount} RUB</Typography>
      </Grid>
    </Grid>
  );
};

const CompanyAccountItemBalanceInfoSkeletonComponent = ({ list }) => {
  return (
    <Box sx={{ pt: 4, px: 8, pb: 8 }}>
      {[1, 2, 3].map((item, key) => (
        <Box key={key} sx={{ py: 1 }}>
          <Skeleton variant="text" sx={{ height: '16px' }} />
        </Box>
      ))}
    </Box>
  );
};
