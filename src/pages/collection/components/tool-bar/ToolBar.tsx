import React, { useState } from 'react';
import { Box, Button, FormControl, Input, InputLabel } from '@mui/material';
import Modal from '../../../../components/modal/modal';

const ToolBar = () => {
  const [open, setOpen] = useState(false);
  
  const handleShow = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Button onClick={handleShow}>Create New Card</Button>
      <Modal
        title="Create New Card"
        open={open}
        onOK={handleShow}
        onCancel={handleClose}
      >
        <Box>
          <FormControl>
            <InputLabel htmlFor="my-input">First Name</InputLabel>
            <Input placeholder="zcxcxz" />
          </FormControl>
        </Box>
      </Modal>
    </Box>
  );
};

export default ToolBar;
