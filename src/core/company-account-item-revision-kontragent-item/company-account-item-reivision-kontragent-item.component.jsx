import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';
import { text } from '../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_KONTRAGENT_DATA_NAME as DATA_NAME } from './company-account-item-revision-kontragent-item.constant';
import { ReviewStatus } from './frames/review-status.component';
import { CompanyAccountItemRevisionKontragentItemAccordionComponent } from './frames/company-account-item-revision-kontragent-item-accordion.component';
import { CompanyAccountItemRevisionKontragentItemReviewComponent } from './frames/company-account-item-reivision-kontragent-item-review.component';
import { CompanyAccountItemRevisionKontragentItemPaymentContainer } from '../company-account-item-revision-kontragent-item-payment/company-account-item-revision-kontragent-item-payment.container';

export function CompanyAccountItemRevisionKontragentItemComponent(props) {
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
            <CompanyAccountItemRevisionKontragentItemAccordionComponent
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
          <CompanyAccountItemRevisionKontragentItemReviewComponent
            data={data}
          />
        </Grid>

        {data[DATA_NAME.STATUS] === 4 && (
          <Grid item>
            <CompanyAccountItemRevisionKontragentItemPaymentContainer
              price={data[DATA_NAME.PRICE]}
            />
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}
