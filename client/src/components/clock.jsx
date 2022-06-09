
const ClockComp = (props) => {
  const today = props.today;
  const timeInfo = props.timeInfo;

  const time = today.toLocaleString(timeInfo.timeDisplay, {
    timeZone: timeInfo.timezone,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })

  return (
    <p className='clock'>{time}</p>
  )
}

export default ClockComp;