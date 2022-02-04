import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';

export function LandingAdvantagesMobileComponent() {
  return (
    <Grid container spacing={6}>
      <Grid item container spacing={3}>
        <Grid item>
          <img
            src={`/static/img/landing/landing-advantages/image-1-mobile.svg`}
          />
        </Grid>

        <Grid item>
          <Typography
            variant="landingTitle"
            fontSize={{ xs: '16px', sm: 'landingTitle.fontSize' }}
            children={text('LANDING.ADVANTAGES.BLOCK_1.TITLE')}
          />
        </Grid>

        <Grid item>
          <Typography
            variant="landingText"
            fontSize={{ xs: '10px', sm: 'landingText.fontSize' }}
          >
            Информационную услугу, а простым языком диагностику книги покупок на
            предмет наличия расхождений или разрывов по декларации НДС. Клиент
            получает детальную расшифровку выявленных проблемных участков, а
            также рекомендации специалистов нашей платформы по ее устранению и
            пресечению.
          </Typography>
        </Grid>
      </Grid>

      <Grid item container spacing={3}>
        <Grid item>
          <img
            src={`/static/img/landing/landing-advantages/image-2-mobile.svg`}
          />
        </Grid>

        <Grid item>
          <Typography
            variant="landingTitle"
            fontSize={{ xs: '16px', sm: 'landingTitle.fontSize' }}
            children={text('LANDING.ADVANTAGES.BLOCK_2.TITLE')}
          />
        </Grid>

        <Grid item>
          <Typography
            variant="landingText"
            fontSize={{ xs: '10px', sm: 'landingText.fontSize' }}
          >
            {text('LANDING.ADVANTAGES.BLOCK_2.DESCRIPTION_1')}
            {text('LANDING.ADVANTAGES.BLOCK_2.DESCRIPTION_2')}
            <br />
            <br />
            {text('LANDING.ADVANTAGES.BLOCK_2.DESCRIPTION_3')}
          </Typography>
        </Grid>
      </Grid>

      <Grid item container spacing={3}>
        <Grid item>
          <img
            src={`/static/img/landing/landing-advantages/image-3-mobile.svg`}
          />
        </Grid>

        <Grid item>
          <Typography
            variant="landingTitle"
            fontSize={{ xs: '16px', sm: 'landingTitle.fontSize' }}
            children={text('LANDING.ADVANTAGES.BLOCK_3.TITLE')}
          />
        </Grid>

        <Grid item>
          <ul style={{ listStyle: 'inherit', marginLeft: '15px' }}>
            <li>
              <Typography
                variant="landingText"
                fontSize={{ xs: '10px', sm: 'landingText.fontSize' }}
              >
                {text('LANDING.ADVANTAGES.BLOCK_3.LIST.ITEM_1')}
              </Typography>
            </li>
            <li>
              <Typography
                variant="landingText"
                fontSize={{ xs: '10px', sm: 'landingText.fontSize' }}
              >
                {text('LANDING.ADVANTAGES.BLOCK_3.LIST.ITEM_2')}
              </Typography>
            </li>
            <li>
              <Typography
                variant="landingText"
                fontSize={{ xs: '10px', sm: 'landingText.fontSize' }}
              >
                {text('LANDING.ADVANTAGES.BLOCK_3.LIST.ITEM_3')}
              </Typography>
            </li>
            <li>
              <Typography
                variant="landingText"
                fontSize={{ xs: '10px', sm: 'landingText.fontSize' }}
              >
                {text('LANDING.ADVANTAGES.BLOCK_3.LIST.ITEM_4')}
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
}
