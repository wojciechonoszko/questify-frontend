const DateDisplay = data => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
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
  //   setValue({ dayName });
  //   time({ time: times, dayName, data });
  return { time: times, dayName };
};

export default DateDisplay;
