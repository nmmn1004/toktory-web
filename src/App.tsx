import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header'
import './App.css';

function App() {
  const location = useLocation();
  const isHeaderHidden = ['/login', '/signup'].includes(location.pathname);

  return (
    <>
      {!isHeaderHidden && <Header />}
      <main className={isHeaderHidden ? 'no-header' : ''}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
