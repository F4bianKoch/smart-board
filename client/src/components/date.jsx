
const DateComp = (props) => {
  const today = props.today;
  const timeInfo = props.timeInfo;
  const page = props.page;

  let date = today.toLocaleString(timeInfo.timeDisplay, {
    timeZone: timeInfo.timezone,
    weekday: 'short',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  date = date.split('.,');
  date = date[0] + date[1]

  return (
    <p className={page === 0 ? "date" : "date-home"}>{date}</p>
  )
}

export default DateComp;