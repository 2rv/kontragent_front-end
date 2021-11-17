import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME } from '../company-account-item-revision-item.constant';
import { text } from '../../../lib/common/text';
import Divider from '@mui/material/Divider';
import { FileListElement } from '../../../lib/element/file-list.element';

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
            <Typography>{company.name} {company.inn}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {company.year.map((year) => {
              return (
                <Typography>
                  {year.year} ({year.firstPeriod ?
                    text(
                      'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.ONE_PERIOD',
                    ) : null} {year.secondPeriod ?
                      text(
                        'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.TWO_PERIOD',
                      ) : null} {year.thirdPeriod ?
                        text(
                          'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.THREE_PERIOD',
                        ) : null} {year.fourthPeriod ?
                          text(
                            'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.FOUR_PERIOD',
                          ) : null}
                  )

                </Typography>
              )
            })}
            <Typography>{company.description}</Typography>
            <Typography gutterBottom variant="listTitle" component="div">
              {text(
                'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.FILES_FOR_DESCRIBING_RESPONSE_RESULT',
              )}
            </Typography>
            {company.fileDescription ? (
              <FileListElement
                list={
                  company.fileDescription
                }
              />
            ) : (
              <Typography variant="body1">
                {text(
                  'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.NO_FILES_PROVIDED',
                )}
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>
        <Divider sx={{ mx: 8 }} />
      </div>
    ))
  );
};
