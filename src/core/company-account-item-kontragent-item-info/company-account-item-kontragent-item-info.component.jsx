import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import { text } from '../../lib/common/text';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';

import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME as DATA_NAME } from './company-account-item-kontragent-item-info.constant';
import { FieldRatingComponent } from '../../lib/common/field-rating/field-rating.component';

export function CompanyAccountItemKontragentItemInfoComponent(props) {
  const { pageLoading, isPending, isSuccess, isError, errorMessage, data } =
    props;

  return (
    <Grid container spacing={6}>
      <Grid item container spacing={4}>
        <Grid item>
          <Typography
            variant="title"
            children={text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.KONTRAGENT_INFO')}
          />
        </Grid>

        <Grid item>
          <Divider />
        </Grid>

        <Grid item>
          <Typography
            variant="listTitle"
            children={text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.ID')}
          />
          <Typography variant="body1" children={data[DATA_NAME.ID]} />
        </Grid>

        <Grid item>
          <Typography
            variant="listTitle"
            children={text(
              'COMPANY_ACCOUNT_KONTRAGENTS.INFO.KONTRAGENT_NICKNAME',
            )}
          />
          <Typography
            variant="body1"
            children={data[DATA_NAME.KONTRAGENT_NAME]}
          />
        </Grid>

        {!!data[DATA_NAME.EMAIL] && (
          <Grid item>
            <Typography variant="listTitle" children={text('Почта')} />
            <Typography variant="body1" children={data[DATA_NAME.EMAIL]} />
          </Grid>
        )}

        {!!data[DATA_NAME.RATING] && (
          <Grid item>
            <Typography variant="listTitle" children={text('Рейтинг')} />
            <FieldRatingComponent
              readOnly
              defaultValue={data[DATA_NAME.RATING]}
            />
          </Grid>
        )}

        {!!data[DATA_NAME.COMMENT] && (
          <Grid item>
            <Typography variant="listTitle" children={text('Описание')} />
            <Typography variant="body1" children={data[DATA_NAME.COMMENT]} />
          </Grid>
        )}
      </Grid>

      <Grid item container spacing={4}>
        <Grid item>
          <Typography
            variant="title"
            children={text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.COMPANY_INFO')}
          />
        </Grid>

        <Grid item>
          <Divider />
        </Grid>

        <Grid item>
          <Typography
            variant="listTitle"
            children={text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.ID')}
          />
          <Typography variant="body1" children={data[DATA_NAME.COMPANY_ID]} />
        </Grid>

        {!!data[DATA_NAME.COMPANY_NAME] && (
          <Grid item>
            <Typography
              variant="listTitle"
              children={text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.COMPANY_NAME')}
            />
            <Typography
              variant="body1"
              children={data[DATA_NAME.COMPANY_NAME]}
            />
          </Grid>
        )}

        <Grid item>
          <Typography
            variant="listTitle"
            children={text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.INN')}
          />
          <Typography variant="body1" children={data[DATA_NAME.INN]} />
        </Grid>

        <Grid item>
          <Typography
            variant="listTitle"
            children={text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.REGISTERED.TITLE')}
          />
          <Typography
            variant="body1"
            children={
              data[DATA_NAME.COMPANY_REGISTERED]
                ? text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.REGISTERED.YES')
                : text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.REGISTERED.NO')
            }
          />
        </Grid>
      </Grid>

      {isPending && (
        <Grid item>
          <SkeletonListComponent text={true} />
        </Grid>
      )}

      {isError && (
        <Grid item>
          <Alert severity="error" children={text(`ERROR.${errorMessage}`)} />
        </Grid>
      )}
    </Grid>
  );
}
