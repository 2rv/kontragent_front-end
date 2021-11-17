import React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

import { text } from '../../../lib/common/text';

import { CompanyAccountItemRevisionCreateCompanyItemContainer } from '../../company-account-item-revision-create-company-item/company-account-item-revision-create-company-item.container';

export const CompanyAccountItemRevisionCreateCompanyListListComponent = ({
  companies,
}) => {
  if (!companies || companies.length === 0) {
    return <Alert severity="error">{text('CHANGE.EMPRY COMPANY LIST')}</Alert>;
  }

  return (
    <Grid rowSpacing={4} container>
      {companies.map((company, companyId) => (
        <Grid item key={companyId}>
          <Box>
            <Paper>
              <Box>
                <CompanyAccountItemRevisionCreateCompanyItemContainer
                  company={company}
                  companyId={companyId}
                  last={companies.length === 1}
                />
              </Box>
            </Paper>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
