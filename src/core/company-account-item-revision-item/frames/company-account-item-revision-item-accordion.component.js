import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME } from '../company-account-item-revision-item.constant';
import { text } from '../../../lib/common/text';
import Divider from '@mui/material/Divider';

export const CompanyAccountItemRevisionItemAccordionComponent = ({ data }) => {
  console.log(data[
    COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.REVISION_COMPANIES
  ])
  return (
    data[
      COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.REVISION_COMPANIES
    ].map((company) => (
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{company.name}</Typography>
            <Typography>{company.inn}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {text(
                'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.ONE_PERIOD',
              )}
            </Typography>
            <Typography>
              {text(
                'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.TWO_PERIOD',
              )}
            </Typography>
            <Typography>
              {text(
                'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.THREE_PERIOD',
              )}
            </Typography>
            <Typography>
              {text(
                'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.FOUR_PERIOD',
              )}
            </Typography>
            <Typography>{company.description}</Typography>
          </AccordionDetails>
        </Accordion>
        <Divider sx={{ mx: 8 }} />
      </div>
    ))
  );
};
