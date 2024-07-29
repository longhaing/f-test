import React, { FC, useMemo } from 'react';
import { Box, Button, ButtonProps, CircularProgress } from '@mui/material';

interface ButtonSubmitProps extends ButtonProps {
  loading?: boolean;
}
const ButtonSubmit: FC<ButtonSubmitProps> = ({
  children,
  loading,
  ...props
}) => {
  const buttonSubmit = useMemo(
    () => (
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Button type="submit" {...props}>
          {children}
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
              position: 'absolute',
            }}
          />
        )}
      </Box>
    ),
    [children, loading, props]
  );

  return buttonSubmit;
};

export default ButtonSubmit;
