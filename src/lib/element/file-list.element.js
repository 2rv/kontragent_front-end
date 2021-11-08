import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';

export const FileListElement = ({ list, handleDelete }) => {
  return (
    <Grid container spacing={2}>
      {list.map((file) => {
        return handleDelete ? (
          <Grid item key={file.uuid}>
            <Chip
              id={file.uuid}
              sx={{ borderRadius: '10px' }}
              clickable
              onClick={() => window.open(file.url)}
              label={file.fileName}
              onDelete={(e) => handleDelete(e)}
              deleteIcon={<DeleteIcon />}
              size="20px"
            />
          </Grid>
        ) : (
          <Grid item key={file.uuid}>
            <Chip
              id={file.uuid}
              sx={{ borderRadius: '10px' }}
              clickable
              onClick={() => window.open(file.url)}
              label={file.uuid}
              size="20px"
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
