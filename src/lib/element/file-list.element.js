import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export const FileListElement = ({ list, handleDelete }) => {
  return (
    <Grid container spacing={2}>
      {list.map((file) => {
        return handleDelete ? (
          <Grid item key={file.uuid}>
            <Chip
              sx={{ borderRadius: '10px' }}
              id={file.uuid}
              clickable
              onClick={() => window.open(file.url)}
              label={file.fileName}
              onDelete={(e) => handleDelete(e)}
              deleteIcon={<DeleteOutlinedIcon />}
              size="medium"
            />
          </Grid>
        ) : (
          <Grid item key={file.uuid}>
            <Chip
              sx={{ borderRadius: '10px' }}
              id={file.uuid}
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
