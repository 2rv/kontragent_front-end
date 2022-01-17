import React from 'react';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';
import { text } from '../../lib/common/text';
import { FeedbackAdminItemItem } from './frame/feedback-admin-item-item';

export function FeedbackAdminItemComponent({
  data,
  isPending,
  isError,
  isSuccess,
  errorMessage,
}) {
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
                {text('FEEDBACK_ADMIN_ITEM.TITLE')}
              </Typography>
              <Divider sx={{ mx: 8 }} />
              {isSuccess && <FeedbackAdminItemItem data={data} />}
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
