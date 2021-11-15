import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME } from '../company-account-item-revision-item.constant';
import { text } from '../../../lib/common/text';

export const CompanyAccountItemRevisionItemAccordionComponent = ({ data }) => {
  console.log(
    data[COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.REVISION_COMPANIES],
  );
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
            <Typography>1й период {company.firstPeriod}</Typography>
            <Typography>2й период {company.secondPeriod}</Typography>
            <Typography>3й период {company.thirdPeriod}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{company.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Grid>
  );
};
