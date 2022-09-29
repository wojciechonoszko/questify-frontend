import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCard from '../../components/modal/modal'
import Header from '../../components/header/header';
import Loader from '../../components/Loader/Loader';
import CreateEditCard from '../../components/CreateEditCard/CreateEditCard';

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
    <>
      <Main>
        <Loader size={80} />
        <Header />
        <SectionTitle>TODAY</SectionTitle>

        <Section>
          <CreateEditCard />
        </Section>
        <SectionTitle>TOMORROW</SectionTitle>
        <Section>
          <CreateEditCard />
        </Section>
        <DoneTaskDiv>
          <DoneTaskSummary expandIcon={<ExpandMoreIcon />}>
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
        <AddCard></AddCard>
      </Main>
    </>
  );
};

export default PageMain;