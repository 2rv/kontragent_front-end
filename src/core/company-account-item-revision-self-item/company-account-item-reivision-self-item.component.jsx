import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';
import { ReviewStatusComponent } from '../../lib/common/review-status/review-status.component';
import { text } from '../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_SELF_DATA_NAME as DATA_NAME } from './company-account-item-revision-self-item.constant';
import { CompanyAccountItemRevisionSelfItemReviewComponent } from './frames/company-account-item-reivision-self-item-review.component';
import { CompanyAccountItemRevisionSelfItemPaymentContainer } from '../company-account-item-revision-self-item-payment/company-account-item-revision-self-item-payment.container';
import { FileListElement } from '../../lib/element/file-list.element';

export function CompanyAccountItemRevisionSelfItemComponent(props) {
  const { data, isPending, isError, isSuccess, errorMessage } = props;

  return (
    <Paper>
      <Grid container spacing={4}>
        <Grid item>
          <Typography
            variant="title"
            component="div"
            children={text('COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM.TITLE', {
              id: data[DATA_NAME.ID],
            })}
          />
          <Typography
            variant="subtext"
            component="div"
            children={text('COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM.INFO')}
          />
        </Grid>

        <Grid item>
          <Divider />
        </Grid>

        <Grid item>
          <Typography
            variant="listTitle"
            component="div"
            children={text('COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM.PRICE_IS')}
          />
          <Typography
            variant="listContent"
            children={text('COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM.PRICE', {
              price: data[DATA_NAME.PRICE],
            })}
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
              'COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM.CREATE_DATE',
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

        <Grid item>
          <Typography
            variant="listTitle"
            component="div"
            children={text(
              'COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM.DESCRIPTION',
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
            children={text('COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM.FILES')}
          />
          {!!data[DATA_NAME.FILES]?.length ? (
            <FileListElement list={data[DATA_NAME.FILES]} />
          ) : (
            <Typography
              variant="listContent"
              children={text(
                'COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM.NO_FILES',
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
              children={text('COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM.PERIOD')}
            />
          </Grid>
          {data[DATA_NAME.PERIOD]?.map((item, key) => (
            <Grid item>
              <Typography variant="listContent" key={key}>
                {text('COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM.YEAR', {
                  year: item[DATA_NAME.YEAR],
                })}
                (
                {item[DATA_NAME.KVARTAL_1] &&
                  text(
                    'COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM.QUARTERS.QUARTER_1',
                  )}
                {item[DATA_NAME.KVARTAL_2] &&
                  text(
                    'COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM.QUARTERS.QUARTER_2',
                  )}
                {item[DATA_NAME.KVARTAL_3] &&
                  text(
                    'COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM.QUARTERS.QUARTER_3',
                  )}
                {item[DATA_NAME.KVARTAL_4] &&
                  text(
                    'COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM.QUARTERS.QUARTER_4',
                  )}
                )
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Grid item>
          <Divider />
        </Grid>

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
