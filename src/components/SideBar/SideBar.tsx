import React from 'react';
import { Link } from 'react-router-dom';

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Sidebar Overlay */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      ></div>

      {/* Sidebar Menu */}
      <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-title">
            <Link to="/" onClick={onClose}>TokTory</Link>
          </div>
          <button className="sidebar-close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><Link to="/" onClick={onClose}>소개</Link></li>
            <li><Link to="/" onClick={onClose}>안내</Link></li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <div className="sidebar-footer-item">비즈니스 문의</div>
          <div className="sidebar-footer-email">jjj4120@gmail.com</div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
