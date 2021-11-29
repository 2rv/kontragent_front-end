import dynamic from 'next/dynamic';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ReactEditor = dynamic(() => import('./react-editor'), {
  ssr: false,
});

export function ReactEditorBlock(props) {
  const { handleChange, data, minHeight, readOnly, error, errorText } = props;
  return (
    <Grid>
      <Grid item>
        <ReactEditor
          label={'Поле ввода'}
          data={data}
          readOnly={readOnly}
          minHeight={minHeight}
          handleChange={handleChange}
        />
      </Grid>
      <Grid item>
        {error && (
          <Grid item>
            <Typography variant="errorText">{errorText}</Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
