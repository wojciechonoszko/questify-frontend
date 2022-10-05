import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';


import * as React from 'react';

import {
  Header,
  Title,
  UserAccountDiv,
  UserName,
  Logout,
  ChallengeIcon,
  ChallengeButton,
} from "./header.styles";

const PageHeader = () => { 

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: '#3E4E6C',
        width: '30px',
        height: '30px',
      },
      children: `${name.split(' ')[0][0]}`,
    };
  }

  return (
    <Header>
      <Title>Questify</Title>
      <UserAccountDiv>
        <Avatar
          {...stringAvatar('J')}
        />
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