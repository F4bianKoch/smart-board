import './styles/navbar.css';


const Navbar = (props) => {

  return (
    <div className="sidebar">
      <a className="home">
        <span className="material-icons-outlined">home</span>
      </a>
      <a className="apps">
        <span className="material-icons-outlined">widgets</span>
      </a>
      <a onClick={() => {props.setIsActive(false)}}>
        <span class="material-icons-outlined">bedtime</span>
      </a>
    </div>
  );
}

export default Navbar;