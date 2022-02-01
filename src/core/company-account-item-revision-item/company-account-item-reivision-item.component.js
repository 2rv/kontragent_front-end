import React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';
import { text } from '../../lib/common/text';

import { CompanyAccountItemRevisionItemPaymentContainer } from '../company-account-item-revision-item-payment/company-account-item-revision-item-payment.container';
import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME as DATA_NAME } from './company-account-item-revision-item.constant';

import { ReviewStatus } from './frames/review-status.component';
import { CompanyAccountItemRevisionItemAccordionComponent } from './frames/company-account-item-revision-item-accordion.component';
import { CompanyAccountItemRevisionItemReviewComponent } from './frames/company-account-item-reivision-item-review.component';

export function CompanyAccountItemRevisionItemComponent(props) {
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
          <ReviewStatus status={data[DATA_NAME.STATUS]} />
        </Grid>

        <Grid item>
          <Typography
            variant="listTitle"
            component="div"
            children={text(
              'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.CREATE_DATE',
            )}
          />
          <Typography
            variant="listContent"
            children={data[DATA_NAME.CREATE_DATE]}
          />
        </Grid>

        <Grid item>
          <Divider />
        </Grid>

        {isSuccess && (
          <Grid item>
            <CompanyAccountItemRevisionItemAccordionComponent
              data={data[DATA_NAME.REVISION_KONTRAGENT] || []}
            />
          </Grid>
        )}

        {isPending && (
          <Grid item>
            <SkeletonListComponent text={true} />
          </Grid>
        )}

        {isError && (
          <Grid item>
            <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
          </Grid>
        )}

        <Grid item>
          <CompanyAccountItemRevisionItemReviewComponent data={data} />
        </Grid>

        {data[DATA_NAME.STATUS] === 4 && (
          <Grid item>
            <CompanyAccountItemRevisionItemPaymentContainer
              price={data[DATA_NAME.PRICE]}
            />
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}
