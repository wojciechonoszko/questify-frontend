import styled from "styled-components"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export const Main = styled.main`
  display: flex;
  margin: auto;
  width: 290px;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 768px){
    width: 670px;
  }

  @media (min-width: 1280px){
    width: 1140px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  background: #F2F3F7;

  @media (min-width: 768px){
    gap: 25px;
  }
`;

export const SectionTitle = styled.h3`
  font-family: 'HelveticaNeueCyr';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #282828;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  width: 290px;

  @media (min-width: 768px){
    width: 670px;
  }

  @media (min-width: 1280px){
    width: 1140px;
  }
`;

export const Line = styled.hr`
  width: 222px;
  border: 1px dashed #B9C3C8;
  margin: 0px;

  @media (min-width: 768px){
    width: 601px;
  }

  @media (min-width: 1280px){
    width: 1069px;
  }
`;

export const DoneTaskDiv = styled(Accordion)`
  box-shadow: none !important;
  margin-bottom: 65px !important;
  background: #F2F3F7 !important;
`;

export const DoneTaskSummary = styled(AccordionSummary)`
  padding: 0px !important;
`;

export const DoneTaskDetails = styled(AccordionDetails)`
  padding: 0px !important;
`;