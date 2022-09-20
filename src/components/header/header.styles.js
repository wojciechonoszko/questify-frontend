import styled from "styled-components"
import LogoutIcon from '@mui/icons-material/Logout';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export const Header = styled.header`
  // width: 100vw;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background-color: #242A37;

  @media (min-width: 768px){
    padding: 0 50px;
  }

  @media (min-width: 1280px){
    padding: 0 71px;
  }
`;

export const Title = styled.p`
  font-family: 'HelveticaNeueCyr';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.02em;
  color: #00D7FF;

  @media (min-width: 768px){
    font-size: 21px;
  }
`;

export const UserAccountDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const UserName = styled.p`
  font-family: 'HelveticaNeueCyr';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #7B8AA4;
  display: none;

  @media (min-width: 768px){
    display: block;
  }
`;

export const Logout = styled(LogoutIcon)`
  color: #3E4E6C;
`;

export const ChallengeIcon = styled(EmojiEventsIcon)`
  color: #242A37;
`;

export const ChallengeButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #00D7FF;
  filter: drop-shadow(0px 0px 4px #00D7FF);
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;