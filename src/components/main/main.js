import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  Main,
  Section,
  SectionTitle,
  Line,
  StyledDiv,
  DoneTaskDiv,
  DoneTaskSummary,
  DoneTaskDetails,
} from "./main.styles";


const PageMain = () => { 
  return (
    <Main>
      <SectionTitle>TODAY</SectionTitle>
      <Section>
        
      </Section>
      <SectionTitle>TOMORROW</SectionTitle>
      <Section>
        
      </Section>
      <DoneTaskDiv>
        <DoneTaskSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <StyledDiv>
            <SectionTitle>DONE</SectionTitle>
            <Line />
          </StyledDiv>
        </DoneTaskSummary>
        <DoneTaskDetails>
          <Section>
            
          </Section>
        </DoneTaskDetails>
      </DoneTaskDiv>
    </Main>
  );
};

export default PageMain;