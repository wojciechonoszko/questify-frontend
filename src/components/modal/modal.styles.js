import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const AddCardModal = styled.div`
  position: fixed;
  right: 15px;
  bottom: 21px;
  width: 52px;
  height: 52px;
  background-color: #FF851C;
  filter: drop-shadow(0px 0px 4px #FF851C);
  display: flex;
  align-items: center;
  border-radius: 50%;

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

export const PlusButton = styled.button`
  width: 52px;
  height: 52px;
  background-color: #FF851C;
  border: none;
  border-radius: 50%;
  font-size: 30px;
  color: white;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #00D7FF;
  }
`;

export const BoxStyle = styled(Box)`
  position: absolute;
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