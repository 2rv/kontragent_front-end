import { useState } from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { TextFieldElement } from '../../element/text-field.element';

export function ListChangeForm(props) {
  const { item, onSubmit, onCancel, dataFields } = props;
  const [state, setState] = useState(item);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const copy = { ...state };
    copy[name] = value;
    setState(copy);
  };

  const handleSubmit = () => {
    onSubmit(state);
    onCancel();
  };

  return (
    <Grid container spacing={4}>
      <Grid item>
        <Typography variant="title" children="Редактирование" />
      </Grid>
      {dataFields.map((name) => (
        <Grid item>
          <TextFieldElement
            defaultValue={item[name]}
            name={name}
            label={name}
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
      ))}

      <Grid
        item
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          gap: 2,
        }}
      >
        <Button onClick={handleSubmit} variant="outlined" color="success">
          Сохранить
        </Button>

        <Button onClick={onCancel} variant="outlined" color="error">
          Отмена
        </Button>
      </Grid>
    </Grid>
  );
}
