// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import Backdrop from '@mui/material/Backdrop';
// import Button from '@mui/material/Button';

// import {
//   PlusButton,
//   BoxStyle,
//   ModalTypography,
//   DeleteIconButton,
//   DeleteIcon,
//   DeleteBox,
//   ModalDelete,
//   ModalTitle,
//   ModalAddTitle,
//   CancelButton,
//   DeleteButton,
// } from "./modal.styles";

// const modal = () => {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//    <>
//       <PlusButton onClick={handleOpen}>+</PlusButton>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <BoxStyle>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             <ModalAddTitle>Choose your category</ModalAddTitle>
//           </Typography>
//           <ModalTypography id="modal-modal-description" sx={{ mt: 2 }}>
//           <Button variant="text">quest</Button>
//           <Button variant="text">challenge</Button>
//           </ModalTypography>
//         </BoxStyle>
//       </Modal>
//   </>
//   );
// }

// export const DeleteModal = (props) => { 
//   const [open, setOpen] = React.useState(false);
//   const handleToggle = () => {
//     setOpen(!open);
//   };
//   return ( 
//    <>
//       <DeleteIconButton onClick={handleToggle}>
//         <DeleteIcon/>
//       </DeleteIconButton>
//       <Backdrop
//         sx={{ background: 'rgba(21, 57, 90, 0.3)', position: 'absolute', zIndex: 2}}
//         open={open}
//       ></Backdrop>
//       <ModalDelete
//         open={open}
//         onClose={handleToggle}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//         disablePortal= {true}
//         hideBackdrop= {true}
//       >
//         <DeleteBox>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             <ModalTitle>Delete this {props.info}?</ModalTitle>
//           </Typography>
//           <ModalTypography id="modal-modal-description" sx={{ mt: 2 }}>
//           <CancelButton onClick={handleToggle} variant="text">cancel</CancelButton>
//           <DeleteButton variant="text">delete</DeleteButton>
//           </ModalTypography>
//         </DeleteBox>
//       </ModalDelete>
//   </>
//   );
// };


// export default modal;