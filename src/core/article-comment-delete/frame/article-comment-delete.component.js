import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export const ArticleCommentDeleteComponent = (props) => {
  const { commentId, isPending, handleDelete } = props;

  return (
    <IconButton
      disabled={isPending}
      edge="end"
      aria-label="delete"
      onClick={() => handleDelete(commentId)}
    >
      <DeleteIcon />
    </IconButton>
  );
};
