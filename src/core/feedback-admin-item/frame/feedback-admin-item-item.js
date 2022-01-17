import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { text } from '../../../lib/common/text';
import { FileListElement } from '../../../lib/element/file-list.element';
import { FEEDBACK_ADMIN_ITEM_DATA_NAME } from '../feedback-admin-item.constant';

export const FeedbackAdminItemItem = ({ data }) => {
  return (
    <Grid container spacing={3} sx={{ pt: 4, px: 8, pb: 8 }}>
      <Grid item>
        <Typography component="div" sx={{ mr: 1 }} variant="listTitle">
          {text('FEEDBACK_ADMIN_ITEM.ID')}
        </Typography>
        <Typography component="div" variant="body1">
          {data[FEEDBACK_ADMIN_ITEM_DATA_NAME.ID]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="div" sx={{ mr: 1 }} variant="listTitle">
          {text('FEEDBACK_ADMIN_ITEM.NAME')}
        </Typography>
        <Typography component="div" variant="body1">
          {data[FEEDBACK_ADMIN_ITEM_DATA_NAME.TITLE]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="div" sx={{ mr: 1 }} variant="listTitle">
          {text('FEEDBACK_ADMIN_ITEM.DESCRIPRTION')}
        </Typography>
        <Typography component="div" variant="body1">
          {data[FEEDBACK_ADMIN_ITEM_DATA_NAME.DESCRIPTION]}
        </Typography>
      </Grid>

      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text('FEEDBACK_ADMIN_ITEM.FILE')}
        </Typography>

        {data[FEEDBACK_ADMIN_ITEM_DATA_NAME.FILES] &&
        data[FEEDBACK_ADMIN_ITEM_DATA_NAME.FILES].length > 0 ? (
          <FileListElement list={data[FEEDBACK_ADMIN_ITEM_DATA_NAME.FILES]} />
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
