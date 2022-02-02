import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';
import { ReviewStatusComponent } from '../../lib/common/review-status/review-status.component';
import { text } from '../../lib/common/text';

import { ADMIN_REVISION_KONTRAGENT_ITEM_DATA_NAME as DATA_NAME } from './admin-revision-kontragent-item.constant';

import { AdminRevisionKontragentItemReviewComponent } from './frame/admin-revision-kontragent-item-review.component';
import { AdminRevisionKontragentItemAccordionComponent } from './frame/admin-revision-kontragent-item-accordion.component';
import { AdminRevisionKontragentItemCompanyComponent } from './frame/admin-revision-kontragent-item-company.component';
import { AdminRevisionKontragentItemCreatorComponent } from './frame/admin-revision-kontragent-item-creator.component';

import { AdminRevisionKontragentReviewCreateContainer } from '../admin-revision-kontragent-review-create/admin-revision-kontragent-review-create.container';

export function AdminRevisionKontragentItemComponent(props) {
  const { data, isPending, isError, isSuccess, errorMessage } = props;

  return (
    <Paper>
      <Grid container spacing={4}>
        <Grid item>
          <Typography
            variant="title"
            component="div"
            children={text('Проверка контрагентов №' + data[DATA_NAME.ID])}
          />
          <Typography
            variant="subtext"
            component="div"
            children={text(
              'Информация о заказе на проверку выбранных контрагентов',
            )}
          />
        </Grid>

        <Grid item>
          <Divider />
        </Grid>

        <Grid item>
          <Typography
            variant="listTitle"
            component="div"
            children={text('COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.SUM')}
          />
          <Typography
            variant="listContent"
            children={text(
              'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.SUM_RUB',
              { price: data[DATA_NAME.PRICE] },
            )}
          />
        </Grid>

        <Grid item>
          <ReviewStatusComponent status={data[DATA_NAME.STATUS]} />
        </Grid>

        <Grid item>
          <Typography
            variant="listTitle"
            component="div"
            children={text('COMMON.REVISION.CREATE_DATE')}
          />
          <Typography
            variant="listContent"
            children={data[DATA_NAME.CREATE_DATE]}
          />
        </Grid>

        <Grid item>
          <Divider />
        </Grid>

        <Grid item>
          <AdminRevisionKontragentItemReviewComponent data={data} />
        </Grid>

        {isError && (
          <Grid item>
            <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
          </Grid>
        )}
        {isPending && <SkeletonListComponent text={true} />}

        {isSuccess && (
          <Grid item>
            <AdminRevisionKontragentItemAccordionComponent
              data={data[DATA_NAME.REVISION_KONTRAGENT] || []}
            />
          </Grid>
        )}

        <Grid item>
          <Typography
            variant="title"
            children={text('ADMIN_REVISION_REVIEW.TITLE.INFO_COMPANY')}
          />
        </Grid>

        <Grid item>
          <AdminRevisionKontragentItemCompanyComponent data={data} />
        </Grid>

        <Grid item>
          <Typography
            variant="title"
            children={text('ADMIN_REVISION_REVIEW.TITLE.INFO_USER')}
          />
        </Grid>

        <Grid item>
          <AdminRevisionKontragentItemCreatorComponent data={data} />
        </Grid>

        <Grid item>
          <AdminRevisionKontragentReviewCreateContainer data={data} />
        </Grid>
      </Grid>
    </Paper>
  );
}

//  <Button
//             fullWidth
//             type="button"
//             onClick={() => {
//               redirect(ADMIN_REVISION_REVIEW_ROUTE_PATH_DYNAMIC, {
//                 params: {
//                   revisionId: getQuery('revisionId'),
//                 },
//               });
//             }}
//             children={text('ADMIN_REVISION_REVIEW.FORM.BUTTON.REDIRECT')}
// />
//     {data[DATA_NAME.STATUS] === 4 && (
//       <>
//         <Typography gutterBottom variant="listTitle" component="div">
//           {text('COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PRICE')}
//         </Typography>

//         <Typography variant="body1">
//           {data[DATA_NAME.PRICE]}
//           {text('CURRENCY.RUB')}
//         </Typography>
//       </>
//     )}
