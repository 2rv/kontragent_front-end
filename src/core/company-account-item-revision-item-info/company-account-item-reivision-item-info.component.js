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
import Chip from '@mui/material/Chip';
import UploadFileIcon from '@mui/icons-material/UploadFile';

import { FileListElement } from '../../lib/element/file-list.element';

import { CompanyAccountItemRevisionItemPaymentContainer } from '../company-account-item-revision-item-payment/company-account-item-revision-item-payment.container';

export function CompanyAccountItemRevisionItemInfoComponent({
  data,
  pageLoading,
  isPending,
  isError,
  isSuccess,
  errorMessage,
}) {
  return (
    <>
      <Paper sx={{ p: 0 }}>
        <Box>
          <Typography
            variant="title"
            sx={{ px: 8, pt: 8, pb: 2 }}
            component="div"
          >
            {data.title}
          </Typography>

          <ReviewStatus status={data.status} />

          <Divider sx={{ mx: 8 }} />

          {isSuccess && (
            <CompanyAccountItemRevisionItemInfoListComponent data={data} />
          )}
          {isPending && <CompanyAccountItemRevisionItemInfoSkeletonComponent />}
          {isError && errorMessage}
        </Box>
      </Paper>

      {data.status === 4 && (
        <Box sx={{ mt: 4 }}>
          <CompanyAccountItemRevisionItemPaymentContainer data={data} />
        </Box>
      )}
    </>
  );
}

const CompanyAccountItemRevisionItemInfoListComponent = ({ data }) => {
  return (
    <Grid container spacing={4} sx={{ pt: 4, px: 8, pb: 8 }}>
      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          Описание запроса
        </Typography>

        <Typography variant="body1">{data.description}</Typography>
      </Grid>

      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          Файлы для описания запроса
        </Typography>

        {data.fileDescription && data.fileDescription.length > 0 ? (
          <FileListElement list={data.fileDescription} />
        ) : (
          <Typography variant="body1">Файлы не предоставлены</Typography>
        )}
      </Grid>

      <Grid item>
        <Divider />
      </Grid>

      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          Результат проверки
        </Typography>

        {data.review ? (
          <Typography variant="body1">{data.review}</Typography>
        ) : (
          <Typography variant="body1">
            Мы еще не составили результата вашего запроса
          </Typography>
        )}
      </Grid>

      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          Файлы для описания результата ответа
        </Typography>

        {data.fileReview && data.fileReview.length > 0 ? (
          <FileListElement list={data.fileReview} />
        ) : (
          <Typography variant="body1">Файлы не предоставлены</Typography>
        )}
      </Grid>
    </Grid>
  );
};

const CompanyAccountItemRevisionItemInfoSkeletonComponent = ({ list }) => {
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

export const ReviewStatus = ({ status }) => {
  const text = [
    '',
    'Заявка на верификации',
    'Заявка в процесс обработки',
    'Заявка выполнена',
    'Требуется доплата за результата заявки',
  ][status];

  console.log(status);

  switch (status) {
    case 1:
      return (
        <Typography
          sx={{ px: 8, pb: 4, color: 'red' }}
          variant="listTitle"
          component="div"
        >
          {text}
        </Typography>
      );
    case 2:
      return (
        <Typography
          sx={{ px: 8, pb: 4, color: 'orange' }}
          variant="listTitle"
          component="div"
        >
          {text}
        </Typography>
      );
    case 3:
      return (
        <Typography
          sx={{ px: 8, pb: 4, color: 'green' }}
          variant="listTitle"
          component="div"
        >
          {text}
        </Typography>
      );
    case 4:
      return (
        <Typography
          sx={{ px: 8, pb: 4, color: 'blue' }}
          variant="listTitle"
          component="div"
        >
          {text}
        </Typography>
      );
    default:
      return null;
  }
};
