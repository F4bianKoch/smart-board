import './styles/navbar.css';


const Navbar = (props) => {

  return (
    <div className="sidebar">
      <a className="home" href='/#Home'>
        <span className="material-icons-outlined">home</span>
      </a>
      <a className="apps" href='/#Apps'>
        <span className="material-icons-outlined">widgets</span>
      </a>
      <a onClick={() => {props.setIsActive(false)}}>
        <span className="material-icons-outlined">bedtime</span>
      </a>
    </div>
  );
}

export default Navbar;