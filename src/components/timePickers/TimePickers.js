import TextField from '@mui/material/TextField';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
// import { LocalizationProvider } from '@mui/lab';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
=======
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import { DateTimePicker } from '@mui/lab';
>>>>>>> 4c573ad (add mui bundles)
import { useState } from 'react';

import styles from './TimePickers.module.css';

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f413d6e (change on task)
export default function DateAndTimePicker({ time }) {
  const [value, setValue] = useState('week');

  const onChange = data => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
<<<<<<< HEAD
    ];
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    let dayName = days[data.getDay()];
    const hours = data.getHours();
    const minutes = (data.getMinutes() < 10 ? '0' : '') + data.getMinutes();
    const times = `${hours} : ${minutes}`;
    const dateNow = new Date().getDate();
    if (
      data.getMonth() === new Date().getMonth() &&
      data.getDate() === new Date().getDate()
    ) {
      dayName = 'Today';
    } else if (
      data.getMonth() === new Date().getMonth &&
      new Date().getDate() + 1 === Number(dateNow)
    ) {
      dayName = 'Tomorrow';
    } else if (Number(data.getDate()) >= Number(dateNow) + 7) {
      const day = data.getDate();
      const month = monthNames[data.getMonth()];
      dayName = `${day}. ${month}`;
    }
    setValue({ dayName });
    time({ time: times, dayName, data });
  };


  return (
    <div className={styles.rooter}>
      <LocalizationProvider className={styles.rooter} dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={props => <TextField {...props} />}
          value={value}
          onChange={onChange}
          ampm={false}
          ampmInClock={true}
          className={styles.rooter}
          clearable={true}
          hideTabs={true}
          disableHighlightToday={true}
          disableMaskedInput={true}
          disableCloseOnSelect={false}
          disablePast={true}
          loading={false}
          showTodayButton={true}
          showToolbar={true}
          FormControlContext={false}
        ></DateTimePicker>
      </LocalizationProvider>
    </div>
  );
}
=======
>>>>>>> 4c573ad (add mui bundles)
=======
      ];
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
  };
}
>>>>>>> f413d6e (change on task)
