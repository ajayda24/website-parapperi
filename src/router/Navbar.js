import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
      <Link to='/'  className='navbar-brand'>
        Home
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarCollapse'
        aria-controls='navbarCollapse'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarCollapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link to='/people' className='nav-link'>
              Post
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about'  className='nav-link' >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;
