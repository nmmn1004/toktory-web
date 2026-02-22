import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../../assets/Menu.png'

function Header() {
  return (
    <header className='main-header'>
      <div className="main-header-title">
        <Link to="/">TokTory</Link>
      </div>

      <button className="main-header-menu">
        <img src={Menu} alt=''/>
      </button>
    </header>
  );
}

export default Header;
