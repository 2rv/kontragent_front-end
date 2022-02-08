import Button from '@mui/material/Button';
import { text } from '../../../lib/common/text';

export function CompanyAdminImportFieldComponent(props) {
  const { isPending, onChange } = props;

  const handleChange = (e) => {
    onChange(e);
    e.target.value = '';
  };

  return (
    <Button
      fullWidth
      variant="contained"
      component="label"
      disabled={isPending}
    >
      {text('Импорт')}
      <input onChange={handleChange} type="file" hidden />
    </Button>
  );
}
