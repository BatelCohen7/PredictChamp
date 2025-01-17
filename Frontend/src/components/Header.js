import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/predict">Predict</Link></li>
          <li><Link to="/groups">Groups</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
