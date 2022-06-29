import './styles/topbar.css';
import ClockComp from './clock';
import DateComp from './date';


const Topbar = (props) => {

  const currentTheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : null;

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }

  function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
  }

  return (
    <div className="topbar">
      <ClockComp today={props.today} timeInfo={props.timeInfo}/>
      <DateComp today={props.today} timeInfo={props.timeInfo}/>

      <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input 
            type="checkbox" 
            id="checkbox" 
            checked={currentTheme === "light" ? true : false} 
            onClick={switchTheme}
          />
          <div className="slider round"></div>
        </label>
      </div>
    </div>
  );
}

export default Topbar;