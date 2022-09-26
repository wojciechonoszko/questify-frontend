// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function MediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//         alt="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

import Card from "../card/Card";

import styles from "./CardsToday.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { newTaskCard, taskActive } from '../../redux/task/taskSelector';
import { useEffect, useState } from 'react';

import data from './tempData.json'

import {
  showTaskActive,
  showTaskDone,
} from '../../redux/task/taskOperation';

const CardsToday = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showTaskActive());
    dispatch(showTaskDone());
  }, [dispatch]);

  const task = useSelector(taskActive);
  const newTask = useSelector(newTaskCard);
  let isNewCard = newTask ? true : false;

  const [isChallenge, setChallenger] = useState(true);
  console.log('CardsToday isChallenge=', isChallenge);

  function takeData(card) {
    setChallenger(card.isChallenge);
  }

  const dayNow = new Date(Date.now()).getDate();
  const monthNow = new Date(Date.now()).getMonth();
  const yearNow = new Date(Date.now()).getFullYear();

  const checkIfToday = (date) => {

    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();
    const day = new Date(date).getDate();

    return (year === yearNow) && (month === monthNow) && ((day === dayNow) && true)
  }


  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.title}>Today</h2>
        <ul className={styles.cardSet}>
          {isNewCard && (
            <Card
              key={newTask._id}
              card={newTask}
              isNewCard={isNewCard}
            />
          )}
          {task?.forEach(card => {
            if (checkIfToday(card.time)) {
              return (
                <Card
                  key={card._id}
                  card={card}
                  data={takeData}
                />
              )
            }
          })}
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>Tomorrow</h2>
        <ul className={styles.cardSet}>
          {task?.forEach(card => {
            if (!checkIfToday(card.time)) {
              return (
                <Card
                  key={card._id}
                  card={card}
                  data={takeData}
                />
              )
            }
          })}
        </ul>

      </section>
    
    </>
  );
};

export default CardsToday;