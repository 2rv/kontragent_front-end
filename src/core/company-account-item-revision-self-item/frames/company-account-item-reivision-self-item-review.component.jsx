import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { FileListElement } from '../../../lib/element/file-list.element';
import { text } from '../../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_SELF_DATA_NAME as DATA_NAME } from '../company-account-item-revision-self-item.constant';

export function CompanyAccountItemRevisionSelfItemReviewComponent(props) {
  const { data } = props;
  return (
    <Grid container spacing={4}>
      <Grid item>
        <Typography
          variant="listTitle"
          component="div"
          children={text('COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM.REVIEW')}
        />
        {data[DATA_NAME.REVIEW] ? (
          <Typography variant="listTitle" children={data[DATA_NAME.REVIEW]} />
        ) : (
          <Typography
            variant="listContent"
            children={text('COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM.NO_REVIEW')}
          />
        )}
      </Grid>

      <Grid item>
        <Typography
          variant="listTitle"
          component="div"
          children={text(
            'COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM.REVIEW_FILES',
          )}
        />
        {!!data[DATA_NAME.FILES_REVIEW]?.length ? (
          <FileListElement list={data[DATA_NAME.FILES_REVIEW]} />
        ) : (
          <Typography
            variant="listContent"
            children={text(
              'COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM.REVIEW_NO_FILES',
            )}
          />
        )}
      </Grid>
    </Grid>
  );
}
