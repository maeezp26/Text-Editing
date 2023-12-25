import React from 'react';
import './Text.css';
import logo from './img/logo.ico';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <>
    <nav>
        <img src={logo} alt="LOGO" />

      <ul className='navbar'>
        <li>Home</li>
        <li>{props.nav2}</li>
        <li>{props.nav3}</li>
        <li>{props.nav4}</li>
      </ul>
    </nav>

    </>
  )
}

Navbar.propTypes = {
     nav2: PropTypes.string,
     nav3: PropTypes.string
}

Navbar.defaultProps = {
  nav2: `Ghar`,
  nav3: `Jaankari`,
  nav4: `Mil`
}


export default Navbar