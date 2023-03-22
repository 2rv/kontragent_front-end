import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export const SkeletonListComponent = (props) => {
  const { text = false } = props;
  return (
    <React.Fragment>
      {[1, 2, 3].map((i, key) => (
        <Box key={key} sx={{ py: 1 }}>
          {text ? (
            <Skeleton variant="text" sx={{ height: '16px' }} />
          ) : (
            <Skeleton variant="rectangular" sx={{ height: '60px' }} />
          )}
        </Box>
      ))}
    </React.Fragment>
  );
};
