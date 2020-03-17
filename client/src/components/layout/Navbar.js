import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const authLinks = (
    <ul>
      <li>
        <Link to="/dashboard">Developers</Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link href="/register">Register</Link>
      </li>
    </ul>
  );

  return (
    <nav>
      <div class="nav-wrapper" style={{backgroundColor: '#17a2b8'}}>
        <a href="#" class="brand-logo" style={{marginLeft: '20px'}}>
          <i className='fas fa-dog' />
        </a>
        {guestLinks}
      </div>
    </nav>
  );
}
