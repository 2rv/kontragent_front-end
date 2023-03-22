import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { FileListElement } from '../../../lib/element/file-list.element';
import { text } from '../../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_KONTRAGENT_DATA_NAME as DATA_NAME } from '../company-account-item-revision-kontragent-item.constant';

export function CompanyAccountItemRevisionKontragentItemReviewComponent(props) {
  const { data } = props;
  return (
    <Grid container spacing={4}>
      <Grid item>
        <Typography
          variant="listTitle"
          component="div"
          children={text(
            'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.RESULT_OF_CHECKING',
          )}
        />
        {data[DATA_NAME.REVIEW] ? (
          <Typography variant="listTitle" children={data[DATA_NAME.REVIEW]} />
        ) : (
          <Typography
            variant="listContent"
            children={text(
              'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.WE_NOT_COMPILED_RESULT_OF_YOUR_REQUEST',
            )}
          />
        )}
      </Grid>

      <Grid item>
        <Typography
          variant="listTitle"
          component="div"
          children={text(
            'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.FILES_FOR_DESCRIBING_RESPONSE_RESULT',
          )}
        />
        {!!data[DATA_NAME.FILES_REVIEW]?.length ? (
          <FileListElement list={data[DATA_NAME.FILES_REVIEW]} />
        ) : (
          <Typography
            variant="listContent"
            children={text(
              'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.NO_FILES_PROVIDED',
            )}
          />
        )}
      </Grid>
    </Grid>
  );
}
