import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/nav.png';

import './styles.css';

const PageHeader = () => {
  return (
    <>
      <header className='page-header'>
        <div className='top-bar-container'>
          
          <Link to="/">
          <div className="nav-logo">
            Info Covid-19
            <img src={logo} alt=""/>
          </div>
          </Link>

          <div className="nav-header">
            <Link to='/'>
              Painel
            </Link>
            <Link to='/'>
              Contato
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default PageHeader;
