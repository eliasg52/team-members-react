import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/group-team-members">
            Teams
          </Link>
        </li>
      </ul>
    </nav>
  );
};
