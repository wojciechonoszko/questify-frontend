// import IconButton from '@mui/material/IconButton';
// import Avatar from '@mui/material/Avatar';


// import * as React from 'react';

// import {
//   Header,
//   Title,
//   UserAccountDiv,
//   UserName,
//   Logout,
//   ChallengeIcon,
//   ChallengeButton,
// } from "./header.styles";

// const PageHeader = () => {

//   function stringAvatar(name) {
//     return {
//       sx: {
//         bgcolor: '#3E4E6C',
//         width: '30px',
//         height: '30px',
//       },
//       children: `${name.split(' ')[0][0]}`,
//     };
//   }

//   return (
//     <Header>
//       <Title>Questify</Title>
//       <UserAccountDiv>
//         <Avatar
//           {...stringAvatar('J')}
//         />
//         <UserName>tekst</UserName>
//       </UserAccountDiv>
//       <UserAccountDiv>
//         <ChallengeButton>
//           <ChallengeIcon />
//         </ChallengeButton>
//         <IconButton aria-label="logout">
//           <Logout />
//         </IconButton>
//       </UserAccountDiv>
//     </Header>
//   );
// };

// export default PageHeader;

import { useSelector, useDispatch } from 'react-redux';
import s from './Header.module.css';
import Icon from '../../components/Icon';
import authSelectors from '../../Redux/auth/auth-selectors';
import authOperations from '../../Redux/auth/auth-operations';

export default function PageHeader() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  const onLogOut = () => {
    dispatch(authOperations.logout());
  };

  return (
    <header className={s.Header}>
      <div className={s.Logo}>Questify</div>
      <div className={s.MenuImgNameLogout}>
        <div className={s.MenuImg}>
          <span className={s.avatarLeter}>
            {name ? name.substr(0, 1).toUpperCase() : 'N'}
          </span>
        </div>
        <span className={s.MenuName}>{name ? name : 'Name'}'s Quest Log</span>
      </div>
      <button
        type="button"
        onClick={onLogOut}
        className={s.IconButton}
        aria-label="Logout"
      >
        <Icon className={s.Icon} name={'logout'} size={22} />
      </button>
    </header>
  );
}