
const ClockComp = (props) => {
  const today = props.today;
  const time = today.toLocaleString('de-DE', {
    timeZone: 'Europe/Berlin',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })

  return (
    <p className='clock'>{time}</p>
  )
}

export default ClockComp;