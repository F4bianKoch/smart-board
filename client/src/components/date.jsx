
const DateComp = (props) => {
  const today = props.today;
  const date = today.toLocaleString('de-DE', {
    timeZone: 'Europe/Berlin',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  return (
    <p className="date">{date}</p>
  )
}

export default DateComp;