import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'calculator',
    },
    {
      id: 3,
      path: '/quotes',
      text: 'quotes',
    },
  ];
  return (
    <>
      <header>
        <h1>Math Magicians</h1>
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <NavLink to={link.path} exact>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
