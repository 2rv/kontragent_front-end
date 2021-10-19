import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { FileListElement } from '../../../lib/element/file-list.element';

import { text } from '../../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME } from '../company-account-item-revision-item.constant';

export const CompanyAccountItemRevisionItemListComponent = ({ data }) => {
  return (
    <Grid container spacing={4} sx={{ pt: 4, px: 8, pb: 8 }}>
      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text('COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.TITLE')}
        </Typography>

        <Typography variant="body1">
          {data[COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.DESCRIPRION]}
        </Typography>
      </Grid>

      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text(
            'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.FILES_FOR_REQUEST_DESCRIPTION',
          )}
        </Typography>

        {data[COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.FILE_DESCRIPRION] &&
        data[COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.FILE_DESCRIPRION]
          .length > 0 ? (
          <FileListElement
            list={
              data[
                COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.FILE_DESCRIPRION
              ]
            }
          />
        ) : (
          <Typography variant="body1">
            {text('COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.FILES_IS_EMPTY')}
          </Typography>
        )}
      </Grid>

      <Grid item>
        <Divider />
      </Grid>

      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text(
            'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.RESULT_OF_CHECKING',
          )}
        </Typography>

        {data[COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.REVIEW] ? (
          <Typography variant="body1">
            {data[COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.REVIEW]}
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

        {data[COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.FILE_REVIEW] &&
        data[COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.FILE_REVIEW].length >
          0 ? (
          <FileListElement
            list={
              data[COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.FILE_REVIEW]
            }
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
