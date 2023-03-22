import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';

export function LandingAdvantagesDesktopComponent() {
  return (
    <Grid container spacing={8} direction="row" justifyContent="flex-start">
      <Grid item xs={6}>
        <img src={`/static/img/landing/landing-advantages/image-1.svg`} />
      </Grid>

      <Grid item xs={6} container spacing={6}>
        <Grid item>
          <Typography
            variant="landingTitle"
            sx={{ fontSize: '24px', lineHeight: 1.5 }}
          >
            {text('LANDING.ADVANTAGES.BLOCK_1.TITLE')}
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="landingText">
            Информационную услугу, а простым языком диагностику книги покупок на
            предмет наличия расхождений или разрывов
            <br />
            по декларации НДС. Клиент получает детальную расшифровку выявленных
            проблемных участков, а также рекомендации специалистов нашей
            платформы по ее устранению и пресечению.
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={6} container spacing={6}>
        <Grid item>
          <Typography
            variant="landingTitle"
            sx={{ fontSize: '24px', lineHeight: 1.5 }}
          >
            {text('LANDING.ADVANTAGES.BLOCK_2.TITLE')}
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="landingText" sx={{ maxWidth: '480px' }}>
            {text('LANDING.ADVANTAGES.BLOCK_2.DESCRIPTION_1')}
            <br />
            {text('LANDING.ADVANTAGES.BLOCK_2.DESCRIPTION_2')}
            <br />
            <br />
            {text('LANDING.ADVANTAGES.BLOCK_2.DESCRIPTION_3')}
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={6}>
        <img src={`/static/img/landing/landing-advantages/image-2.svg`} />
      </Grid>

      <Grid item xs={6}>
        <img src={`/static/img/landing/landing-advantages/image-3.svg`} />
      </Grid>

      <Grid item xs={6} container spacing={6}>
        <Grid item>
          <Typography
            variant="landingTitle"
            sx={{ fontSize: '24px', lineHeight: 1.5 }}
          >
            {text('LANDING.ADVANTAGES.BLOCK_3.TITLE')}
          </Typography>
        </Grid>

        <Grid item>
          <ul style={{ listStyle: 'inherit', marginLeft: '15px' }}>
            <li>
              <Typography variant="landingText">
                {text('LANDING.ADVANTAGES.BLOCK_3.LIST.ITEM_1')}
              </Typography>
            </li>
            <li>
              <Typography variant="landingText">
                {text('LANDING.ADVANTAGES.BLOCK_3.LIST.ITEM_2')}
              </Typography>
            </li>
            <li>
              <Typography variant="landingText" sx={{ maxWidth: '490px' }}>
                {text('LANDING.ADVANTAGES.BLOCK_3.LIST.ITEM_3')}
              </Typography>
            </li>
            <li>
              <Typography variant="landingText">
                {text('LANDING.ADVANTAGES.BLOCK_3.LIST.ITEM_4')}
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
}
