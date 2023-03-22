import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { TextFieldElement } from '../../lib/element/text-field.element';
import { text } from '../../lib/common/text';

import { ADMIN_REVISION_KONTRAGENT_REVIEW_SHARE_DATA_NAME as FIELD_NAME } from './admin-revision-kontragent-review-share.constant.js';
import { Fragment, useState } from 'react';

export function AdminRevisionKontragentReviewShareComponent(props) {
  const {
    isPending,
    isSuccess,
    isError,
    errorMessage,
    onSubmit,
    onChange,
    email,
  } = props;

  const [expanded, setExpanded] = useState(false);

  const handleChange = (_, isExpanded) => {
    setExpanded(isExpanded);
  };

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <Fragment>
      <Grid item xs={1} md={2}>
        <Button
          fullWidth
          type="button"
          color="secondary"
          onClick={toggleExpanded}
          children={text('Поделиться отчётом')}
        />
      </Grid>

      <Grid item xs={1}>
        <Accordion
          expanded={expanded}
          onChange={handleChange}
          disableGutters
          elevation={0}
          sx={{ p: 0 }}
        >
          <AccordionSummary sx={{ display: 'none' }} />
          <AccordionDetails>
            <Grid container spacing={4}>
              <Grid item>
                <Typography variant="title" children={text('Поделиться')} />
              </Grid>

              <Grid item>
                <Divider />
              </Grid>

              <Grid item>
                <TextFieldElement
                  label={text('Почта на которую будет отправлен отчёт')}
                  onChange={onChange}
                  value={email}
                  fullWidth
                />
              </Grid>

              <Grid item>
                <Button
                  fullWidth
                  type="button"
                  color="success"
                  onClick={onSubmit}
                  children={text('Отправить')}
                />
              </Grid>

              {isPending && (
                <Grid item>
                  <LinearProgress />
                </Grid>
              )}

              {isSuccess && (
                <Grid item>
                  <Alert severity="success">
                    {text('COMMON.REQUEST_SENT_SUCCESSFULLY')}
                  </Alert>
                </Grid>
              )}

              {isError && (
                <Grid item>
                  <Alert severity="error">
                    {text(`ERROR.${errorMessage}`)}
                  </Alert>
                </Grid>
              )}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Fragment>
  );
}
