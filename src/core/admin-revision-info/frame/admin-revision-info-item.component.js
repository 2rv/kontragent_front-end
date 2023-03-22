import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ADMIN_REVISION_INFO_DATA_NAME } from '../admin-revision-info.constant';
import { text } from '../../../lib/common/text';
import { FileListElement } from '../../../lib/element/file-list.element';

export const AdminRevisionInfoItemComponent = ({ data }) => {
  return (
    <Grid container spacing={3} sx={{ pt: 4, px: 8, pb: 8 }}>
      {data[ADMIN_REVISION_INFO_DATA_NAME.STATUS] === 4 && (
        <Grid item>
          <Typography gutterBottom variant="listTitle" component="div">
            {text('COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PRICE')}
          </Typography>

          <Typography variant="body1">
            {data[ADMIN_REVISION_INFO_DATA_NAME.PRICE]}
            {text('CURRENCY.RUB')}
          </Typography>
        </Grid>
      )}
      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text(
            'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.RESULT_OF_CHECKING',
          )}
        </Typography>

        {data[ADMIN_REVISION_INFO_DATA_NAME.REVIEW] ? (
          <Typography variant="body1">
            {data[ADMIN_REVISION_INFO_DATA_NAME.REVIEW]}
          </Typography>
        ) : (
          <Typography variant="body1">
            {text(
              'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.WE_NOT_COMPILED_RESULT_OF_YOUR_REQUEST',
            )}
          </Typography>
        )}
      </Grid>

      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text(
            'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.FILES_FOR_DESCRIBING_RESPONSE_RESULT',
          )}
        </Typography>

        {data[ADMIN_REVISION_INFO_DATA_NAME.FILE_REVIEW] &&
        data[ADMIN_REVISION_INFO_DATA_NAME.FILE_REVIEW].length > 0 ? (
          <FileListElement
            list={data[ADMIN_REVISION_INFO_DATA_NAME.FILE_REVIEW]}
          />
        ) : (
          <Typography variant="body1">
            {text(
              'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.NO_FILES_PROVIDED',
            )}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};
