import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: "column",
  justfyContent: 'space-between',
  transform: 'translate(-50%, -50%)',
  width: 'max-content',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export default function ModalComponent({ children, open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Acceptable Diference:
          </Typography>
          {children}
        </Box>
      </Modal>
    </div>
  );
}