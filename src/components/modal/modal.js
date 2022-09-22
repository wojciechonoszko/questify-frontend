import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import {
    PlusButton,
    BoxStyle,
    ModalTypography,
} from "./modal.styles";

const AddCard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
   <>
      <PlusButton onClick={handleOpen}>+</PlusButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxStyle>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Choose your category
          </Typography>
          <ModalTypography id="modal-modal-description" sx={{ mt: 2 }}>
          <Button variant="text">Quest</Button>
          <Button variant="text">Challenge</Button>
          </ModalTypography>
        </BoxStyle>
      </Modal>
  </>
  );
}
export default AddCard;