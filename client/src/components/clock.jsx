
const ClockComp = (props) => {
  const today = props.today;
  const timeInfo = props.timeInfo;
  const page = props.page;

  let time = today.toLocaleString(timeInfo.timeDisplay, {
    timeZone: timeInfo.timezone,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })

  time = time.split(':');

  return (
    <p className={page === 0 ? "clock" : "time"}>
      {`${time[0]}:${time[1]}`}
      {page === 0 ? `:${time[2]}` : null}
    </p>
  )
}

export default ClockComp;