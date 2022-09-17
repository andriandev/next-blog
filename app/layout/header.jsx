import { useState } from 'react';
import ActiveLink from '@/components/shared/active-link';

function Header() {
  const [collapse, setCollapse] = useState(false);

  const handleClick = () => {
    setCollapse((prev) => {
      if (prev === false) {
        return true;
      }
      return false;
    });
  };

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark"
        aria-label="Main navigation"
      >
        <div className="container">
          <ActiveLink href="/" activeClassName="">
            <a className="navbar-brand">Next Blog</a>
          </ActiveLink>
          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            id="navbarSideCollapse"
            aria-label="Toggle navigation"
            onClick={handleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`navbar-collapse offcanvas-collapse${
              collapse ? ' open' : ''
            }`}
            id="navbarsExampleDefault"
          >
            <ul
              onClick={handleClick}
              className="navbar-nav me-auto mb-2 mb-lg-0"
            >
              <li className="nav-item">
                <ActiveLink href="/" activeClassName="active">
                  <a className="nav-link">Home</a>
                </ActiveLink>
              </li>
              <li className="nav-item">
                <ActiveLink href="/about" activeClassName="active">
                  <a className="nav-link">About</a>
                </ActiveLink>
              </li>
            </ul>
            <ul
              onClick={handleClick}
              className="navbar-nav ms-auto mb-2 mb-lg-0"
            >
              <li className="nav-item">
                <ActiveLink href="/auth/register" activeClassName="active">
                  <a className="nav-link">Register</a>
                </ActiveLink>
              </li>
              <li className="nav-item">
                <ActiveLink href="/auth/login" activeClassName="active">
                  <a className="nav-link">Login</a>
                </ActiveLink>
              </li>
              <li className="nav-item">
                <ActiveLink href="/profile" activeClassName="active">
                  <a className="nav-link">Profile</a>
                </ActiveLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
