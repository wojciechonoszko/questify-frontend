import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ClearIcon from '@mui/icons-material/Clear';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

export const PlusButton = styled.button`
position: fixed;
  right: 15px;
  bottom: 21px;
  width: 52px;
  height: 52px;
  background-color: #FF851C;
  filter: drop-shadow(0px 0px 4px #FF851C);
  border: none;
  border-radius: 50%;
  font-size: 30px;
  color: white;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #00D7FF;
    filter: drop-shadow(0px 0px 4px #00D7FF);
  }

  @media (min-width: 768px){
    right: 23px;
    bottom: 42px;
  }

  @media (min-width: 1280px){
    right: 46px;
    bottom: 40px;
  }
`;

export const BoxStyle = styled(Box)`
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  width: 260px;
  background-color: #FFFFFF;
  padding: 20px;
  text-align: center;
`;

export const ModalTypography = styled(Typography)`
  display: flex;
  justify-content: space-around;
`;

export const DeleteIcon = styled(ClearIcon)`
  width: 20px !important;
  height: 20px !important;
  color: red;
`;

export const DeleteIconButton = styled.button`
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-color: inherit;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeleteBox = styled(Box)`
  width: 163px;
  background-color: #FFFFFF;
  text-align: center;
  border-radius: 10px;
`;

export const ModalDelete = styled(Modal)`
  position: absolute !important;
  display: inline-grid;
  align-content: center;
  justify-content: center;
`;

export const ModalTitle = styled.p`
  font-family: 'HelveticaNeueCyr';
  font-style: normal;
  font-weight: 550;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  color: #282828;
`;

export const ModalAddTitle = styled(ModalTitle)`
  font-size: 16px;
`;

export const CancelButton = styled(Button)`
  color: #24D40C !important;
`;

export const DeleteButton = styled(Button)`
  color: #DB0938 !important;
`;