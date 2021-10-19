import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import UploadFileIcon from '@mui/icons-material/UploadFile';

export const FileListElement = ({ list }) => {
  return (
    <Grid container spacing={2}>
      {list.map((file) => {
        return (
          <Grid item>
            <a target="_blank" href={file.url}>
              <Chip
                size="small"
                variant="outlined"
                clickable
                icon={<UploadFileIcon />}
                label={file.uuid}
              />
            </a>
          </Grid>
        );
      })}
    </Grid>
  );
};
