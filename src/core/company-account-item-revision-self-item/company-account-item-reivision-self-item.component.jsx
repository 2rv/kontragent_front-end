import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';
import { ReviewStatusComponent } from '../../lib/common/review-status/review-status.component';
import { text } from '../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_SELF_DATA_NAME as DATA_NAME } from './company-account-item-revision-self-item.constant';
import { CompanyAccountItemRevisionSelfItemAccordionComponent } from './frames/company-account-item-revision-self-item-accordion.component';
import { CompanyAccountItemRevisionSelfItemReviewComponent } from './frames/company-account-item-reivision-self-item-review.component';
import { CompanyAccountItemRevisionSelfItemPaymentContainer } from '../company-account-item-revision-self-item-payment/company-account-item-revision-Self-item-payment.container';

export function CompanyAccountItemRevisionSelfItemComponent(props) {
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
            <CompanyAccountItemRevisionSelfItemAccordionComponent data={[]} />
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
          <CompanyAccountItemRevisionSelfItemReviewComponent data={data} />
        </Grid>

        {data[DATA_NAME.STATUS] === 4 && (
          <Grid item>
            <CompanyAccountItemRevisionSelfItemPaymentContainer
              price={data[DATA_NAME.PRICE]}
            />
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}
