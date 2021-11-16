import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME } from '../company-account-item-revision-item.constant';
import { text } from '../../../lib/common/text';

export const CompanyAccountItemRevisionItemAccordionComponent = ({ data }) => {
  return (
    <Grid>
      {data[
        COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.REVISION_COMPANIES
      ].map((company) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{company.name}</Typography>
            <Typography>{company.inn}</Typography>
            <Typography>
              {text(
                'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.ONE_PERIOD',
              ) + company.firstPeriod}
            </Typography>
            <Typography>
              {text(
                'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.TWO_PERIOD',
              ) + company.secondPeriod}
            </Typography>
            <Typography>
              {text(
                'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.THREE_PERIOD',
              ) + company.thirdPeriod}
            </Typography>
            <Typography>
              {text(
                'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.FOUR_PERIOD',
              ) + company.thirdPeriod}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{company.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Grid>
  );
};
