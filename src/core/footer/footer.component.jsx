import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';
import { redirect } from '../../main/navigation';

export function FooterComponent(props) {
  const { isPending, isSuccess, isError, errorMessage, data } = props;

  return (
    <Grid container spacing={3}>
      <Grid
        item
        container
        spacing={4}
        direction="row"
        justifyContent="flex-start"
        alignItems="baseline"
      >
        <Grid item>
          <Typography
            variant="title"
            fontSize="16px"
            children={text('FOOTER.ANALYTICS')}
          />
        </Grid>

        <Grid item>
          <Typography
            variant="body1"
            children={text('FOOTER.COMPANY', {
              count: data.company || 0,
            })}
          />
        </Grid>

        <Grid item>
          <Typography
            variant="body1"
            children={text('FOOTER.KONTRAGENT', {
              count: data.kontragent || 0,
            })}
          />
        </Grid>

        <Grid item>
          <Typography
            variant="body1"
            children={text('FOOTER.REVISION', {
              count: data.revision || 0,
            })}
          />
        </Grid>
      </Grid>

      <Grid item>
        <Divider />
      </Grid>

      <Grid
        item
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="baseline"
      >
        <Grid item>
          <Typography
            variant="body1"
            sx={{ cursor: 'pointer', color: '#707070' }}
            onClick={() => {
              redirect(
                'https://xn--80aggrpdcrrf.xn--p1ai/static/pdf/terms-of-the-offer.pdf',
                { newTab: true },
              );
            }}
            children={text('FOOTER.PRIVACY_POLICY')}
          />
        </Grid>

        <Grid item>
          <Typography
            variant="body1"
            sx={{ cursor: 'pointer', color: '#707070' }}
            onClick={() => {
              redirect(
                'https://xn--80aggrpdcrrf.xn--p1ai/static/pdf/user-agreement.pdf',
                { newTab: true },
              );
            }}
            children={text('FOOTER.USER_AGREEMENT')}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
