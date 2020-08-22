import React, { useState, useEffect } from 'react';

import facebookIcon from '../../assets/icons/facebook.svg';
// import twiterIcon from '../../assets/icons/twiter.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import mailIcon from '../../assets/icons/email.svg';
import githubIcon from '../../assets/icons/github.svg';

import './styles.css';

const SocialMedia = () => {
  return (
    <>
      <h1 hidden>Contato Antônio Abrantes</h1>
      <h3 className="social-media-title">CONTATOS</h3>
      <div className='social-media'>
        <a href='mailto:antonio.abrantes.dev@gmail.com?Subject=Contato%20app%20covid19' target="_blanck">
          <img src={mailIcon} alt='' />
        </a>
        <a href="https://www.linkedin.com/in/antonio-abrantes/" target="_blanck">
          <img src={linkedinIcon} alt='' />
        </a>
        <a href="https://github.com/antonio-abrantes" target="_blanck">
          <img src={githubIcon} alt='' />
        </a>
        <a href='/'>
          <img src={facebookIcon} alt='' />
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
