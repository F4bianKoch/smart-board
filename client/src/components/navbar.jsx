import './navbar.css';


const Navbar = () => {
  return (
    <div className="sidebar">
      <a className="home">
        <span className="material-icons-outlined">home</span>
      </a>
      <a className="apps">
        <span className="material-icons-outlined">widgets</span>
      </a>
      <a className="settings">
        <span className="material-icons">tune</span>
      </a>
    </div>
  );
}

export default Navbar;