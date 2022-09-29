import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCard from '../../components/modal/modal'
import Header from '../../components/header/header'

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
      <Header/>
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
      <AddCard />
    </Main>
  );
};

export default PageMain;