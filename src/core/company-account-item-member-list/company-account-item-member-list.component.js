import React from 'react';
import Paper from '@mui/material/Paper';

import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import { text } from '../../lib/common/text';

import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';

import { CompanyAccountItemMemberListListComponent } from './frame/company-account-item-member-list.component';

export function CompanyAccountItemMemberListComponent({
  data,
  pageLoading,
  isPending,
  isError,
  isSuccess,
  errorMessage,
}) {
  return (
    <Paper sx={{ p: 0 }}>
      <Box>
        <Typography
          variant="title"
          sx={{ px: 8, pt: 8, pb: 4 }}
          component="div"
        >
          {text('COMPANY_ACCOUNT_ITEM_MEMBER.MEMBER_LIST.TITLE')}
        </Typography>

        <Divider sx={{ mx: 8 }} />

        {isSuccess && <CompanyAccountItemMemberListListComponent list={data} />}
        {isPending && (
          <Box sx={{ pt: 4, px: 8, pb: 8 }}>
            <SkeletonListComponent />
          </Box>
        )}
        {isError && (
          <Box sx={{ pt: 4, px: 8, pb: 8 }}>
            <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
          </Box>
        )}
      </Box>
    </Paper>
  );
}
