import React from 'react';

import './styles.css';

interface CardDadosProps {
  data?: number;
  label: string;
  afterClass: string;
  lbClass: string;
}

const CardDados: React.FC<CardDadosProps> = (props) => {
  return (
    <>
      <div
        className={`card-total tp-geral card-total-border-info ${props.afterClass}`}
      >
        <div className='ct-info'>
          <div className={`${props.lbClass} number-size`}>250</div>

          <div className='lb-title'>{props.label}</div>
        </div>
      </div>
    </>
  );
};

export default CardDados;
