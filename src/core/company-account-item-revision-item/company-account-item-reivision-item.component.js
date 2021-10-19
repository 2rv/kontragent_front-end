import React from 'react';

import Paper from '@mui/material/Paper';

import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';

import { text } from '../../lib/common/text';

import { CompanyAccountItemRevisionItemPaymentContainer } from '../company-account-item-revision-item-payment/company-account-item-revision-item-payment.container';
import { CompanyAccountItemRevisionItemListComponent } from './frames/company-account-item-reivision-item-list.component';
import { ReviewStatus } from './frames/review-status.component';

export function CompanyAccountItemRevisionItemComponent({
  data,
  isPending,
  isError,
  isSuccess,
  errorMessage,
}) {
  return (
    <React.Fragment>
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
            <CompanyAccountItemRevisionItemListComponent data={data} />
          )}
          {isPending && (
            <Box sx={{ pt: 4, px: 8, pb: 8 }}>
              <SkeletonListComponent text={true} />
            </Box>
          )}
          {isError && (
            <Box sx={{ pt: 4, px: 8, pb: 8 }}>
              <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
            </Box>
          )}
        </Box>
      </Paper>

      {data.status === 4 && (
        <Box sx={{ mt: 4 }}>
          <CompanyAccountItemRevisionItemPaymentContainer data={data} />
        </Box>
      )}
    </React.Fragment>
  );
}
