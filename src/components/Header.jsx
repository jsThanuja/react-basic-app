import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <h2 className="logo">ReactApp</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Header;


