import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { text } from '../../../lib/common/text';
import React from 'react';
import { FileListElement } from '../../../lib/element/file-list.element';
import { ADMIN_REVISION_REVIEW_ITEM_DATA_NAME } from '../admin-revision-review-item.constant';
import Divider from '@mui/material/Divider';

export const AdminRevisionReviewItemAccordionComponent = ({ data }) => {
  return data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.REVISION_COMPANIES].map(
    (company) => (
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              {text('ADMIN_REVISION_REVIEW.ACCORDION.NAME')} {company.name}
              {text('ADMIN_REVISION_REVIEW.ACCORDION.INN')} {company.inn}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {company.year.map((years) => {
                return (
                  <React.Fragment>
                    {text('ADMIN_REVISION_REVIEW.ACCORDION.YEAR')} {years.year}{' '}
                    ({text('ADMIN_REVISION_REVIEW.ACCORDION.PERIOD')}{' '}
                    {years.firstPeriod
                      ? text(
                          'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.ONE_PERIOD',
                        )
                      : null}{' '}
                    {years.secondPeriod
                      ? text(
                          'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.TWO_PERIOD',
                        )
                      : null}{' '}
                    {years.thirdPeriod
                      ? text(
                          'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.THREE_PERIOD',
                        )
                      : null}{' '}
                    {years.fourthPeriod
                      ? text(
                          'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.FOUR_PERIOD',
                        )
                      : null}
                    ) ,
                  </React.Fragment>
                );
              })}
            </Typography>
            <Typography>
              {text('ADMIN_REVISION_REVIEW.ACCORDION.DESCRIPTION')}{' '}
            </Typography>
            <Typography>{company.description}</Typography>
            <Typography gutterBottom variant="listTitle" component="div">
              {text(
                'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.FILES_FOR_DESCRIBING_REVISION_COMPANY',
              )}
            </Typography>

            {company.fileDescription ? (
              <FileListElement list={company.fileDescription} />
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
    ),
  );
};
