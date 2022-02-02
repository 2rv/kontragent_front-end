import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';
import { ReviewStatusComponent } from '../../lib/common/review-status/review-status.component';
import { text } from '../../lib/common/text';

import { ADMIN_REVISION_SELF_ITEM_DATA_NAME as DATA_NAME } from './admin-revision-self-item.constant';

import { AdminRevisionSelfItemReviewComponent } from './frame/admin-revision-self-item-review.component';
import { AdminRevisionSelfItemCompanyComponent } from './frame/admin-revision-self-item-company.component';
import { AdminRevisionSelfItemCreatorComponent } from './frame/admin-revision-self-item-creator.component';

import { AdminRevisionSelfReviewCreateContainer } from '../admin-revision-self-review-create/admin-revision-self-review-create.container';

export function AdminRevisionSelfItemComponent(props) {
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
          <AdminRevisionSelfItemReviewComponent data={data} />
        </Grid>

        {isError && (
          <Grid item>
            <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
          </Grid>
        )}
        {isPending && <SkeletonListComponent text={true} />}

        <Grid item>
          <Typography
            variant="listTitle"
            component="div"
            children={text(
              'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.DESCRIPTION',
            )}
          />
          <Typography
            variant="listContent"
            children={data[DATA_NAME.DESCRIPRION]}
          />
        </Grid>

        <Grid item>
          <Typography
            variant="listTitle"
            component="div"
            children={text(
              'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.FILES_FOR_DESCRIBING_REVISION_COMPANY',
            )}
          />
          {!!data[DATA_NAME.FILES]?.length ? (
            <FileListElement list={data[DATA_NAME.FILES]} />
          ) : (
            <Typography
              variant="listContent"
              children={text(
                'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.NO_FILES_PROVIDED',
              )}
            />
          )}
        </Grid>

        <Grid item container>
          <Grid item>
            <Typography
              gutterBottom
              variant="listTitle"
              component="div"
              children={text(
                'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.REVISION_PERIOD',
              )}
            />
          </Grid>
          {data[DATA_NAME.PERIOD]?.map((item, key) => (
            <Grid item>
              <Typography variant="listContent" key={key}>
                {text('COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.YEAR', {
                  year: item[DATA_NAME.YEAR],
                })}
                (
                {item[DATA_NAME.KVARTAL_1] &&
                  text(
                    'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.ONE_PERIOD',
                  )}
                {item[DATA_NAME.KVARTAL_2] &&
                  text(
                    'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.TWO_PERIOD',
                  )}
                {item[DATA_NAME.KVARTAL_3] &&
                  text(
                    'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.THREE_PERIOD',
                  )}
                {item[DATA_NAME.KVARTAL_4] &&
                  text(
                    'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.FOUR_PERIOD',
                  )}
                )
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Grid item>
          <Typography
            variant="title"
            children={text('ADMIN_REVISION_REVIEW.TITLE.INFO_COMPANY')}
          />
        </Grid>

        <Grid item>
          <AdminRevisionSelfItemCompanyComponent data={data} />
        </Grid>

        <Grid item>
          <Typography
            variant="title"
            children={text('ADMIN_REVISION_REVIEW.TITLE.INFO_USER')}
          />
        </Grid>

        <Grid item>
          <AdminRevisionSelfItemCreatorComponent data={data} />
        </Grid>

        <Grid item>
          <AdminRevisionSelfReviewCreateContainer data={data} />
        </Grid>
      </Grid>
    </Paper>
  );
}
