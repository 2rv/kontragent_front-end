import { Fragment } from 'react';
import {
  Grid,
  Box,
  Alert,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material';
import { text } from '../../lib/common/text';
import { setLinkRedirect } from '../../main/navigation';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';
import { FEEDBACK_ADMIN_LIST_DATA_NAME as DATA_NAME } from './admin-dashboard-feedback-list.constant';
import {
  FEEDBACK_ADMIN_ITEM_DATA_NAME,
  FEEDBACK_ADMIN_ITEM_DYNAMIC_ROUTE_PATH,
} from '../feedback-admin-item';
import { AdminDashboardFeedbackListStatusComponent } from './admin-dashboard-feedback-list-status.component';

export function AdminDashboardFeedbackListComponent(props) {
  const {
    state: { pending, data, error },
  } = props;
  return (
    <Grid container spacing={4}>
      <Grid item>
        <Typography variant="title" component="div">
          {text('Жалобы на сегодня')}
        </Typography>
      </Grid>

      <Grid item>
        <Divider />
      </Grid>

      <Grid item container spacing={3}>
        {data && data.length ? (
          data.map((item, key) => (
            <Fragment key={key}>
              <Grid item>
                <ListItem
                  button
                  onClick={setLinkRedirect(
                    FEEDBACK_ADMIN_ITEM_DYNAMIC_ROUTE_PATH,
                    {
                      params: {
                        feedbackId: item[FEEDBACK_ADMIN_ITEM_DATA_NAME.ID],
                      },
                    },
                  )}
                >
                  <ListItemText
                    primary={item[DATA_NAME.TITLE]}
                    primaryTypographyProps={{
                      variant: 'listTitle',
                    }}
                    secondary={
                      <>
                        {item[DATA_NAME.CREATE_DATE]}
                        <AdminDashboardFeedbackListStatusComponent
                          status={item[DATA_NAME.STATUS]}
                        />
                      </>
                    }
                    secondaryTypographyProps={{
                      variant: 'listTitle',
                    }}
                  />
                </ListItem>
              </Grid>
              {key !== data.length - 1 && (
                <Grid item>
                  <Divider />
                </Grid>
              )}
            </Fragment>
          ))
        ) : (
          <Grid item>
            <Alert severity="info">{text('Жалоб нет')}</Alert>
          </Grid>
        )}
      </Grid>

      {pending && (
        <Grid item>
          <Box>
            <SkeletonListComponent />
          </Box>
        </Grid>
      )}

      {error && (
        <Grid item>
          <Box>
            <Alert severity="error">{text(`ERROR.${error}`)}</Alert>
          </Box>
        </Grid>
      )}
    </Grid>
  );
}
