import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';

import Menu from '../../assets/Menu.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className='main-header'>
        <div className="main-header-title">
          <Link to="/">TokTory</Link>
        </div>

        <button className="main-header-menu" onClick={toggleMenu}>
          <img src={Menu} alt='menu'/>
        </button>
      </header>

      <SideBar isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
}

export default Header;
