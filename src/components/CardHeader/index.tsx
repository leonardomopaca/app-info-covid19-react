import React from 'react';

import './styles.css';

interface IApiInfo {
  data?: string;
  cidade?: string;
  uf?: string;
}

const CardHeader: React.FC<IApiInfo> = (props) => {
  return (
    <>
      <div id='card-header'>
        <div className='card-header-informativo'>
          <h1>INFORMATIVO DIÁRIO: {`${props.cidade}-${props.uf}`}</h1>
        </div>
        <div className='card-header-update'>Atualizado em: {props.data}</div>
      </div>
    </>
  );
};

export default CardHeader;
