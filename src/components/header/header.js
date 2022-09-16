import IconButton from '@mui/material/IconButton';

import {
  Header,
  Title,
  UserAccountDiv,
  UserIcon,
  UserName,
  Logout,
  ChallengeIcon,
  ChallengeButton,
} from "./header.styles";


const PageHeader = () => { 
  return (
    <Header>
      <Title>Questify</Title>
      <UserAccountDiv>
        <UserIcon>
          <p>J</p>
        </UserIcon>
        <UserName>tekst</UserName>
      </UserAccountDiv>
      <UserAccountDiv>
        <ChallengeButton>
          <ChallengeIcon />
        </ChallengeButton>
        <IconButton aria-label="logout">
          <Logout />
        </IconButton>
      </UserAccountDiv>
    </Header>
  );
};

export default PageHeader;