import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { text } from '../../../lib/common/text';
import { redirect } from '../../../main/navigation';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export function CompanyAdminImportFieldComponent(props) {
  const { isPending, onChange } = props;

  const handleChange = (e) => {
    onChange(e);
    e.target.value = '';
  };

  const handleClick = () => {
    redirect('https://xn--80aggrpdcrrf.xn--p1ai/static/xlsx/companies.xlsx', {
      newTab: true,
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography
          variant="body1"
          color="primary"
          sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          onClick={handleClick}
        >
          <HelpOutlineIcon fontSize="inherit" sx={{ mr: 1 }} />
          {text('Файл пример')}
        </Typography>
      </Grid>

      <Grid item>
        <Button
          fullWidth
          variant="contained"
          component="label"
          disabled={isPending}
        >
          {text('Импорт')}
          <input onChange={handleChange} type="file" hidden />
        </Button>
      </Grid>
    </Grid>
  );
}
