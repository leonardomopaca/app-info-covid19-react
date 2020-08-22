import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const CardHeader = () => {
  return (
    <>
      <div id='card-header'>
        <div className='card-header-informativo'>
          <h1>INFORMATIVO DIÁRIO: Sousa-PB</h1>
        </div>
        <div className='card-header-update'>Atualizado em: 21/08/2020</div>
      </div>
    </>
  );
};

export default CardHeader;
