import { Fragment } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import { text } from '../../../lib/common/text';
import { FileListElement } from '../../../lib/element/file-list.element';

import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_KONTRAGENT_DATA_NAME as DATA_NAME } from '../company-account-item-revision-kontragent-item.constant';

export function CompanyAccountItemRevisionKontragentItemAccordionComponent(
  props,
) {
  const { data } = props;

  return data.map((kontragent, key) => (
    <Fragment key={key}>
      <Accordion disableGutters elevation={0} sx={{ p: 0 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="title" children={kontragent[DATA_NAME.NAME]} />
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={6}>
            <Grid item>
              <Typography
                variant="listTitle"
                component="div"
                children={text(
                  'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.DESCRIPTION',
                )}
              />
              <Typography
                variant="listContent"
                children={kontragent[DATA_NAME.DESCRIPRION]}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="listTitle"
                component="div"
                children={text(
                  'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.FILES_FOR_DESCRIBING_REVISION_COMPANY',
                )}
              />
              {kontragent[DATA_NAME.FILES].length ? (
                <FileListElement list={kontragent[DATA_NAME.FILES]} />
              ) : (
                <Typography
                  variant="listContent"
                  children={text(
                    'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.NO_FILES_PROVIDED',
                  )}
                />
              )}
            </Grid>

            <Grid item container>
              <Grid item>
                <Typography
                  gutterBottom
                  variant="listTitle"
                  component="div"
                  children={text(
                    'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.REVISION_PERIOD',
                  )}
                />
              </Grid>
              {kontragent[DATA_NAME.PERIOD].map((item, key) => (
                <Grid item>
                  <Typography variant="listContent" key={key}>
                    {text('COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.YEAR', {
                      year: item[DATA_NAME.YEAR],
                    })}
                    (
                    {item[DATA_NAME.KVARTAL_1] &&
                      text(
                        'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.ONE_PERIOD',
                      )}
                    {item[DATA_NAME.KVARTAL_2] &&
                      text(
                        'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.TWO_PERIOD',
                      )}
                    {item[DATA_NAME.KVARTAL_3] &&
                      text(
                        'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.THREE_PERIOD',
                      )}
                    {item[DATA_NAME.KVARTAL_4] &&
                      text(
                        'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.PERIODS.FOUR_PERIOD',
                      )}
                    )
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Divider />
    </Fragment>
  ));
}
