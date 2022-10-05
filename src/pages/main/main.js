// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';


// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import AddCard from '../../components/modal/modal'
// import Header from '../../components/header/header';
// import Loader from '../../components/Loader/Loader';
// import CreateEditCard from '../../components/CreateEditCard/CreateEditCard';
// import Icon from '../../components/Icon';
// import TodaySection from '../../components/TodaySection/TodaySection';

// import cardsOperations from '../../Redux/cards/cardsOperations';
// import cardsSelectors from '../../Redux/cards/cardsSelectors';

// import styles from './MainPage.module.css';

// import {
//   Main,
//   Section,
//   SectionTitle,
//   Line,
//   StyledDiv,
//   DoneTaskDiv,
//   DoneTaskSummary,
//   DoneTaskDetails,
// } from "./main.styles";


// const PageMain = () => { 
//   return (
//     <>
//       <Main>
//         <Loader size={80} />
//         <Header />
//         <SectionTitle>TODAY</SectionTitle>

//         <Section>
//           <CreateEditCard />
//         </Section>
//         <SectionTitle>TOMORROW</SectionTitle>
//         <Section>
//           <CreateEditCard />
//         </Section>
//         <DoneTaskDiv>
//           <DoneTaskSummary expandIcon={<ExpandMoreIcon />}>
//             <StyledDiv>
//               <SectionTitle>DONE</SectionTitle>
//               <Line />
//             </StyledDiv>
//           </DoneTaskSummary>
//           <DoneTaskDetails>
//             <Section>
              
//             </Section>
//           </DoneTaskDetails>
//         </DoneTaskDiv>
//         <AddCard></AddCard>
//       </Main>
//     </>
//   );
// };

// export default PageMain;



import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SectionMainPage from '../../components/SectionMainPage/SectionMainPage'
import CardList from '../../components/CardList/CardList'
// import Header from '../../Components/Header/Header'
import Header from '../../components/header/header';
import Icon from '../../components/Icon'
import TodaySection from '../../components/TodaySection/TodaySection'
import Modal from '../../components/Modal/Modal'
//import modal from '../../components/modalTemp/modal';
import Loader from '../../components/Loader/Loader'

import cardsOperations from '../../Redux/cards/cardsOperations'
import cardsSelectors from '../../Redux/cards/cardsSelectors'

import s from './MainPage.module.css'

export default function MainPage() {
  const [doneIsShown, setDoneIsShown] = useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(cardsOperations.fetchActiveCards())
  }, [dispatch])

  function onShowDone() {
    setDoneIsShown(!doneIsShown)

    if (doneCards.length < 1 && !doneIsShown) {
      dispatch(cardsOperations.fetchDoneCards())
    }
  }

  //------------- Selectors ------------
  const activeTodayCards = useSelector(cardsSelectors.getActiveTodayCards)
  const activeTomorrowCards = useSelector(cardsSelectors.getActiveTomorrowCards)
  const doneCards = useSelector(cardsSelectors.getDoneCards)
  const challengeCards = useSelector(cardsSelectors.getChallengeCards)
  const activeThisWeekCards = useSelector(cardsSelectors.getActiveThisWeekCards)
  const activeThisMonthCards = useSelector(
    cardsSelectors.getActiveThisMonthCards,
  )
  const activeNextMonthsCards = useSelector(
    cardsSelectors.getActiveNextMonthsCards,
  )
  const overdueCards = useSelector(cardsSelectors.getOverdueCards)

  const isLoading = useSelector(cardsSelectors.getIsLoading)

  const todayCards = [
    ...getSorted(activeTodayCards),
    ...getSorted(challengeCards),
  ]

  function getSorted(list) {
    return list.sort((a, b) => {
      const dateA = new Date(a.deadline)
      const dateB = new Date(b.deadline)
      if (dateA < dateB) {
        return -1
      }
      if (dateA > dateB) {
        return 1
      }

      return 0
    })
  }

  return (
    <div className={s.appWrapper}>
      {isLoading && (
        <Modal>
          <Loader size={100} />
        </Modal>
      )}
      <div className={s.headerWrapper}>
        <Header />
      </div>
      <div className={s.container}>
        <SectionMainPage
          className={s.overdueContainer}
          title="OVERDUE - SHAME ON YOU!"
          cardList={getSorted(overdueCards)}
        />
        <TodaySection cards={todayCards} />

        <SectionMainPage
          title="TOMORROW"
          cardList={getSorted(activeTomorrowCards)}
        />
        <SectionMainPage
          title="THIS WEEK"
          cardList={getSorted(activeThisWeekCards)}
        />
        <SectionMainPage
          title="THIS MONTH"
          cardList={getSorted(activeThisMonthCards)}
        />
        <SectionMainPage
          title="NEXT MONTH"
          cardList={getSorted(activeNextMonthsCards)}
        />

        <section className={s.sectionDone}>
          <div className={s.lineWrapper}>
            <button className={s.btnDone} onClick={onShowDone}>
              DONE
              <Icon
                className={s.IconDone}
                name={doneIsShown ? 'triangle-up' : 'triangle-down'}
                size={12}
              />
            </button>
          </div>

          {doneIsShown && <CardList cards={doneCards} />}
        </section>
      </div>
    </div>
  )
}