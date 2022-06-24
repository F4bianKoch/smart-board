import './topbar.css';
import ClockComp from './clock';
import DateComp from './date';


const Topbar = (props) => {

  return (
    <div className="topbar">
      <ClockComp today={props.today} timeInfo={props.timeInfo}/>
      <DateComp today={props.today} timeInfo={props.timeInfo}/>

      <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" />
          <div className="slider round"></div>
        </label>
      </div>
    </div>
  );
}

export default Topbar;