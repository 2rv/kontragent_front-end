import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ADMIN_REVISION_REVIEW_ITEM_DATA_NAME } from '../admin-revision-review-item.constant';
import { FileListElement } from '../../../lib/element/file-list.element';
import { text } from '../../../lib/common/text';
import { ADMIN_REVISION_REVIEW_ROUTE_PATH_DYNAMIC } from '../../admin-revision-review';
import { getQuery } from '../../../main/navigation/navigation.core';
import { redirect } from '../../../main/navigation';
import Button from '@mui/material/Button';

export const AdminRevisionReviewItemListComponent = ({ data }) => {
  return (
    <Grid container spacing={4} sx={{ pt: 4, px: 8, pb: 8 }}>
      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text('COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.TITLE')}
        </Typography>

        <Typography variant="body1">
          {data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.DESCRIPRION]}
        </Typography>
      </Grid>

      <Grid item>
        {data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.STATUS] === 4 && (
          <>
            <Typography gutterBottom variant="listTitle" component="div">
              {text('COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PRICE')}
            </Typography>

            <Typography variant="body1">
              {data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.PRICE]}
              {text('CURRENCY.RUB')}
            </Typography>
          </>
        )}
      </Grid>

      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text(
            'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.FILES_FOR_REQUEST_DESCRIPTION',
          )}
        </Typography>

        {data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.FILE_DESCRIPRION] &&
        data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.FILE_DESCRIPRION].length >
          0 ? (
          <FileListElement
            list={data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.FILE_DESCRIPRION]}
          />
        ) : (
          <Typography variant="body1">
            {text('COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.FILES_IS_EMPTY')}
          </Typography>
        )}
      </Grid>

      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text('COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.YEARS')}
        </Typography>

        {data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.YEAR] && (
          <>
            {data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.YEAR].map((years) => {
              return (
                <>
                  <Typography variant="body1">
                    {years[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.NAME]}
                    {text('COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.YEAR')}
                    {years[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.PERIOD] && (
                      <>
                        {years[
                          ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.PERIOD
                        ][0] && (
                          <>
                            {text(
                              'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.ONE_PERIOD',
                            )}
                          </>
                        )}
                        {years[
                          ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.PERIOD
                        ][1] && (
                          <>
                            {text(
                              'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.TWO_PERIOD',
                            )}
                          </>
                        )}
                        {years[
                          ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.PERIOD
                        ][2] && (
                          <>
                            {text(
                              'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.THREE_PERIOD',
                            )}
                          </>
                        )}
                        {years[
                          ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.PERIOD
                        ][3] && (
                          <>
                            {text(
                              'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.FOUR_PERIOD',
                            )}
                          </>
                        )}
                      </>
                    )}
                  </Typography>
                </>
              );
            })}
          </>
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

        {data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.REVIEW] ? (
          <Typography variant="body1">
            {data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.REVIEW]}
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

        {data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.FILE_REVIEW] &&
        data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.FILE_REVIEW].length > 0 ? (
          <FileListElement
            list={data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.FILE_REVIEW]}
          />
        ) : (
          <Typography variant="body1">
            {text(
              'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.NO_FILES_PROVIDED',
            )}
          </Typography>
        )}
      </Grid>

      <Grid item xs={12}>
        <Grid container>
          <Grid xs={4}>
            <Button
              fullWidth
              type="button"
              onClick={() => {
                return redirect(ADMIN_REVISION_REVIEW_ROUTE_PATH_DYNAMIC, {
                  dynamic: true,
                  params: {
                    revisionId: getQuery('revisionId'),
                  },
                });
              }}
            >
              {text('ADMIN_REVISION_REVIEW.FORM.BUTTON.REDIRECT')}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
