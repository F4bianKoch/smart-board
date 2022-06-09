
const DateComp = (props) => {
  const today = props.today;
  const timeInfo = props.timeInfo;

  const date = today.toLocaleString(timeInfo.timeDisplay, {
    timeZone: timeInfo.timezone,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  return (
    <p className="date">{date}</p>
  )
}

export default DateComp;