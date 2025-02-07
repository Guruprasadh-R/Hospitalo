import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Hospitalo</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/patients">Patients</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
