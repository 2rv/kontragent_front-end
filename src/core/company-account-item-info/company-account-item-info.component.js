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

export function CompanyAccountItemInfoComponent({
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
          Информация о компании
        </Typography>

        <Divider sx={{ mx: 8 }} />

        {isSuccess && <CompanyAccountItemInfoListComponent data={data} />}
        {isPending && <CompanyAccountItemInfoSkeletonComponent />}
        {isError && errorMessage}
      </Box>
    </Paper>
  );
}

const CompanyAccountItemInfoListComponent = ({ data }) => {
  return (
    <Grid container spacing={3} sx={{ pt: 4, px: 8, pb: 8 }}>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          Название компании:
        </Typography>
        <Typography variant="listContent">{data.name}</Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          ID в системе:
        </Typography>
        <Typography variant="listContent">ID{data.id}</Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          INN компании:
        </Typography>
        <Typography variant="listContent">{data.inn}</Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          Верификация данных:
        </Typography>
        <Typography
          sx={{ color: !data.verificateInfo && '#F2994A' }}
          variant="listContent"
        >
          {data.verificateInfo ? 'Верифицировано' : 'Не верифицировано'}
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          Верификация баланса:
        </Typography>
        <Typography
          sx={{ color: !data.verificatePayment && '#F2994A' }}
          variant="listContent"
        >
          {data.verificatePayment ? 'Верифицировано' : 'Не верифицировано'}
        </Typography>
      </Grid>
    </Grid>
  );
};

const CompanyAccountItemInfoSkeletonComponent = ({ list }) => {
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
