import React from 'react';

import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

import { text } from '../../../lib/common/text';

import { CompanyAccountItemSelfRevisionCreatePeriodItemContainer } from '../../company-account-item-self-revision-create-period-item/company-account-item-self-revision-create-period-item.container';

export const CompanyAccountItemSelfRevisionCreatePeriodListListComponent = ({
  periods,
  companyId,
}) => {
  if (!periods || periods.length === 0) {
    return (
      <Alert severity="error">
        {text(
          'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_LIST.EMPTY',
        )}
      </Alert>
    );
  }

  return (
    <Grid rowSpacing={4} container>
      {periods.map((period, index) => (
        <React.Fragment key={index}>
          <Grid item>
            <CompanyAccountItemSelfRevisionCreatePeriodItemContainer
              companyId={companyId}
              last={periods.length === 1}
              yearId={index}
              period={period}
            />
          </Grid>
          {index !== periods.length - 1 && (
            <Grid item>
              <Divider light={true} />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};
