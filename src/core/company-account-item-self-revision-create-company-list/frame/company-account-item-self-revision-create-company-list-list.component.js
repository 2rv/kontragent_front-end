import React from 'react';

import { Divider, Grid, Alert, Box, Paper, Typography } from '@mui/material';

import { text } from '../../../lib/common/text';

import { CompanyAccountItemSelfRevisionCreateCompanyItemContainer } from '../../company-account-item-self-revision-create-company-item/company-account-item-self-revision-create-company-item.container';

export const CompanyAccountItemSelfRevisionCreateCompanyListListComponent = ({
  companies,
}) => {
  if (!companies || companies.length === 0) {
    return <Alert severity="error">{text('CHANGE.EMPRY COMPANY LIST')}</Alert>;
  }

  return (
    <Paper>
      <Grid rowSpacing={4} container>
        <Grid item sx={{ pb: 4 }}>
          <Typography sx={{ pb: 3 }} variant="title" component="div">
            {text(
              'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_INFO.TITLE',
            )}
          </Typography>
          <Typography variant="subTitle" component="div">
            {text(
              'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_INFO.SUBTITLE',
            )}
          </Typography>
        </Grid>
        <Divider />
        {companies.map((company, companyId) => (
          <Grid item key={companyId}>
            <Box>
              <Box>
                <CompanyAccountItemSelfRevisionCreateCompanyItemContainer
                  company={company}
                  companyId={companyId}
                  last={companies.length === 1}
                />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
