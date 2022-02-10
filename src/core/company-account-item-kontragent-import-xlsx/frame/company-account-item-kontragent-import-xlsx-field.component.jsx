import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { text } from '../../../lib/common/text';
import { redirect } from '../../../main/navigation';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export function CompanyAccountItemKontragentImportXlsxFieldComponent(props) {
  const { isPending, onImport, onSave, isEmptyList } = props;

  const handleChange = (e) => {
    onImport(e);
    e.target.value = '';
  };

  const handleClick = () => {
    redirect('https://xn--80aggrpdcrrf.xn--p1ai/static/xlsx/kontragents.xlsx', {
      newTab: true,
    });
  };

  return (
    <Grid
      container
      spacing={4}
      direction="row"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Grid item xs={12}>
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

      <Grid item xs={6}>
        <Button fullWidth component="label" disabled={isPending}>
          {text('Импорт')}
          <input onChange={handleChange} type="file" hidden />
        </Button>
      </Grid>

      <Grid item xs={6}>
        <Button
          fullWidth
          onClick={onSave}
          disabled={isPending || isEmptyList}
          color="success"
          children={'Импортировать'}
        />
      </Grid>
    </Grid>
  );
}
