import React from 'react';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { CompanyAccountItemRevisionItemPaymentContainer } from '../company-account-item-revision-item-payment/company-account-item-revision-item-payment.container';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';
import { AdminRevisionReviewItemListComponent } from './frame/admin-revision-review-item-list.component';
import { text } from '../../lib/common/text';
import { ReviewStatus } from '../company-account-item-revision-item/frames/review-status.component';
import { AdminRevisionReviewItemCompanyComponent } from './frame/admin-revision-review-item-company.component';
import { AdminRevisionReviewItemCreatorComponent } from './frame/admin-revision-review-item-creator.component';
import { AdminRevisionReviewItemAccordionComponent } from './frame/admin-revision-review-item-accordion.component';

export function AdminRevisionReviewItemComponent({
  data,
  isPending,
  isError,
  isSuccess,
  errorMessage,
}) {
  console.log(JSON.stringify(data));

  return (
    <React.Fragment>
      <Grid spacing={6} container>
        <Grid item>
          <Paper sx={{ p: 0 }}>
            <Box>
              <Typography
                variant="title"
                sx={{ px: 8, pt: 8, pb: 2 }}
                component="div"
              >
                {data.title}
              </Typography>

              <ReviewStatus status={data.status} />

              <Divider sx={{ mx: 8 }} />

              {isSuccess && (
                <AdminRevisionReviewItemListComponent data={data} />
              )}
              {isPending && (
                <Box sx={{ pt: 4, px: 8, pb: 8 }}>
                  <SkeletonListComponent text={true} />
                </Box>
              )}
              {isError && (
                <Box sx={{ pt: 4, px: 8, pb: 8 }}>
                  <Alert severity="error">
                    {text(`ERROR.${errorMessage}`)}
                  </Alert>
                </Box>
              )}
            </Box>
          </Paper>
        </Grid>

        <Grid item>
          <Paper sx={{ p: 0 }}>
            <Box>
              {isSuccess && (
                <AdminRevisionReviewItemAccordionComponent data={data} />
              )}
              {isPending && (
                <Box sx={{ pt: 4, px: 8, pb: 8 }}>
                  <SkeletonListComponent text={true} />
                </Box>
              )}
              {isError && (
                <Box sx={{ pt: 4, px: 8, pb: 8 }}>
                  <Alert severity="error">
                    {text(`ERROR.${errorMessage}`)}
                  </Alert>
                </Box>
              )}
            </Box>
          </Paper>
        </Grid>

        <Grid item>
          <Paper sx={{ p: 0 }}>
            <Box>
              <Typography
                variant="title"
                sx={{ px: 8, pt: 8, pb: 2 }}
                component="div"
              >
                {text('ADMIN_REVISION_REVIEW.TITLE.INFO_COMPANY')}
              </Typography>
              {isSuccess && (
                <AdminRevisionReviewItemCompanyComponent data={data} />
              )}
              {isPending && (
                <Box sx={{ pt: 4, px: 8, pb: 8 }}>
                  <SkeletonListComponent text={true} />
                </Box>
              )}
              {isError && (
                <Box sx={{ pt: 4, px: 8, pb: 8 }}>
                  <Alert severity="error">
                    {text(`ERROR.${errorMessage}`)}
                  </Alert>
                </Box>
              )}
            </Box>
          </Paper>
        </Grid>

        <Grid item>
          <Paper sx={{ p: 0 }}>
            <Box>
              <Typography
                variant="title"
                sx={{ px: 8, pt: 8, pb: 2 }}
                component="div"
              >
                {text('ADMIN_REVISION_REVIEW.TITLE.INFO_USER')}
              </Typography>
              {isSuccess && (
                <AdminRevisionReviewItemCreatorComponent data={data} />
              )}
              {isPending && (
                <Box sx={{ pt: 4, px: 8, pb: 8 }}>
                  <SkeletonListComponent text={true} />
                </Box>
              )}
              {isError && (
                <Box sx={{ pt: 4, px: 8, pb: 8 }}>
                  <Alert severity="error">
                    {text(`ERROR.${errorMessage}`)}
                  </Alert>
                </Box>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
