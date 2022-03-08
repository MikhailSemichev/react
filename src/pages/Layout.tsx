import React from 'react'; // we need this to make JSX compile
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  const a = 'Feature 1';
  const b = 'Feature 1.224';

  return (
    <div>
      <nav className="main-nav">
        <Link to="/">Home</Link> | <Link to="login">Login</Link>
      </nav>
      <div className="pages">
        <Outlet />
      </div>
    </div>
  );
};
