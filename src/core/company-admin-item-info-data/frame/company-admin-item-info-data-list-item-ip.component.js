import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { text } from '../../../lib/common/text';
import { COMPANY_DATA_DATA_NAME } from '../company-admin-item-info-data.constant';

export const CompanyAdminItemInfoDataListItemIPComponent = ({ data }) => {
  const { inn, ogrn, focusHref, briefReport, contactPhones, info, type } = data;
  const {
    fio,
    okpo,
    okato,
    okfs,
    okogu,
    okopf,
    opf,
    oktmo,
    registrationDate,
    dissolutionDate,
    status,
  } = info;
  return (
    <Grid container spacing={3} sx={{ pt: 4, px: 8, pb: 8 }}>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          {text('ИНН(ИП)')}:
        </Typography>
        <Typography variant="listContent">{inn}</Typography>
      </Grid>

      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          {text('ОГРН(ИП)')}:
        </Typography>
        <Typography variant="listContent">{ogrn}</Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="title">
          {text('Информация об индивидуальном предпринимателе')}
        </Typography>
      </Grid>

      <Divider sx={{ mx: 8, my: 4 }} />

      <Grid item>
        <Grid container spacing={3}>
          <Grid item>
            <Typography sx={{ mr: 1 }} variant="listTitle">
              {text('ФИО')}:
            </Typography>
            <Typography variant="listContent">{fio}</Typography>
          </Grid>

          <Grid item>
            <Typography sx={{ mr: 1 }} variant="listTitle">
              {text('ОКПО')}:
            </Typography>
            <Typography variant="listContent">{okpo}</Typography>
          </Grid>

          <Grid item>
            <Typography sx={{ mr: 1 }} variant="listTitle">
              {text('ОКАТО')}:
            </Typography>
            <Typography variant="listContent">{okato}</Typography>
          </Grid>

          <Grid item>
            <Typography sx={{ mr: 1 }} variant="listTitle">
              {text('ОКФС')}:
            </Typography>
            <Typography variant="listContent">{okfs}</Typography>
          </Grid>

          <Grid item>
            <Typography sx={{ mr: 1 }} variant="listTitle">
              {text('ОКОГУ')}:
            </Typography>
            <Typography variant="listContent">{okogu}</Typography>
          </Grid>

          <Grid item>
            <Typography sx={{ mr: 1 }} variant="listTitle">
              {text('Код ОКОПФ')}:
            </Typography>
            <Typography variant="listContent">{okopf}</Typography>
          </Grid>

          <Grid item>
            <Typography sx={{ mr: 1 }} variant="listTitle">
              {text('Наименование организационно-правовой формы')}:
            </Typography>
            <Typography variant="listContent">{opf}</Typography>
          </Grid>

          <Grid item>
            <Typography sx={{ mr: 1 }} variant="listTitle">
              {text('ОКТМО')}:
            </Typography>
            <Typography variant="listContent">{oktmo}</Typography>
          </Grid>

          <Grid item>
            <Typography sx={{ mr: 1 }} variant="listTitle">
              {text('Дата образования')}:
            </Typography>
            <Typography variant="listContent">{registrationDate}</Typography>
          </Grid>

          <Grid item>
            <Typography sx={{ mr: 1 }} variant="listTitle">
              {text('Дата прекращения деятельности')}:
            </Typography>
            <Typography variant="listContent">{dissolutionDate}</Typography>
          </Grid>

          <Grid item>
            <Typography sx={{ mr: 1 }} variant="listTitle">
              {text('Статус ИП')}:
            </Typography>
            <Typography variant="listContent">{status}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
