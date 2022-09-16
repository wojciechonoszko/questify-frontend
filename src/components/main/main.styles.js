import styled from "styled-components"

export const Main = styled.main`
  display: flex;
  margin: auto;
  width: 290px;
  flex-direction: column;
  // justify-content: flex-start;

  @media (min-width: 768px){
    width: 670px;
  }

  @media (min-width: 1280px){
    width: 1140px;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (min-width: 768px){
    gap: 25px;
  }
`;