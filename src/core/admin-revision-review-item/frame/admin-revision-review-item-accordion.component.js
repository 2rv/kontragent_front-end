import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { text } from '../../../lib/common/text';
import React from 'react';
import Grid from '@mui/material/Grid';
import { FileListElement } from '../../../lib/element/file-list.element';
import { ADMIN_REVISION_REVIEW_ITEM_DATA_NAME } from '../admin-revision-review-item.constant';
import Divider from '@mui/material/Divider';

export const AdminRevisionReviewItemAccordionComponent = ({ data }) => {
  return data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.REVISION_COMPANIES].map(
    (company) => (
      <div>
        <Accordion>
          <AccordionSummary
            sx={{ marginTop: -6, marginBottom: -6 }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid item>
              <Grid item>
                <Typography gutterBottom variant="listTitle" component="div">
                  {text('ADMIN_REVISION_REVIEW.ACCORDION.NAME')}
                </Typography>{' '}
                <Typography variant="body1" sx={{ mt: -2 }}>
                  {company.name}
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails sx={{ mb: -6 }}>
            <Typography>
              {company.year.map((years, i) => {
                return (
                  <React.Fragment key={i}>
                    <Typography
                      gutterBottom
                      variant="listTitle"
                      component="div"
                    >
                      {' '}
                      {text('ADMIN_REVISION_REVIEW.ACCORDION.INN')}{' '}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: -2 }}>
                      {' '}
                      {company.inn}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="listTitle"
                      component="div"
                    >
                      {text('ADMIN_REVISION_REVIEW.ACCORDION.YEAR')}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: -2 }}>
                      {years.year} (
                      {text('ADMIN_REVISION_REVIEW.ACCORDION.PERIOD')}{' '}
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
                      ){' '}
                    </Typography>{' '}
                  </React.Fragment>
                );
              })}
            </Typography>
            <Typography gutterBottom variant="listTitle" component="div">
              {text('ADMIN_REVISION_REVIEW.ACCORDION.DESCRIPTION')}{' '}
            </Typography>
            <Typography variant="body1" sx={{ mt: -3 }}>
              {company.description}
            </Typography>

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
      </div>
    ),
  );
};
