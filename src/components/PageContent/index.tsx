import React, { useState, useEffect } from 'react';

import './styles.css';

import mapaMundo from '../../assets/images/mapa-mundo.png';
import SocialMedia from '../SocialMedia';

const PageContent = () => {
  return (
    <>
      <div className='section-titulo'>
        <h3>COVID-19 NO BRASIL E NO MUNDO</h3>
        <p className='click-mapa'>Click no Mapa para visualizar</p>
        <a
          className='link-mundo'
          href='https://especiais.g1.globo.com/bemestar/coronavirus/mapa-coronavirus/'
          target='_blanck'
        >
          <img src={mapaMundo} alt='' />
        </a>
      </div>
      <div className='section-titulo'>
        <h1 hidden>Como se prevenir do Coronavírus</h1>
        <h3>PRINCIPAIS CUIDADOS</h3>
        <div>
          <p>
            Como o vírus é transmitido de pessoa para pessoa, o chamado
            distanciamento social é importante para desacelerar a proliferação
            do vírus. Evitar o contato com outras pessoas em lugares fechados ou
            aglomerados ajuda a frear a disseminação. Caso seja inevitável sair
            de casa, algumas medidas como não pegar transporte público em
            horário de pico, não cumprimentar com beijos, abraços ou apertos de
            mão, manter uma distância de pelo menos 2 metros das outras pessoas
            ajudam a diminuir a contaminação. Além disso, é importante evitar o
            contato com superfícies de locais públicos e lembrar de higienizar
            as mãos com álcool em gel logo após.
          </p>
          <p>
            É possível estar com a COVID-19 por até 14 dias antes de apresentar
            os sintomas, que são febre, cansaço e tosse seca. A maioria das
            pessoas (cerca de 80%) se recupera da doença sem a necessidade de
            tratamentos especiais. Em casos mais raros, ela pode ser grave e até
            fatal. Idosos e pessoas com outras condições médicas (como asma,
            diabetes e doença cardíaca) são mais vulneráveis a quadros sérios.
          </p>
          Possíveis sintomas:
            <ul>
              <li>Tosse</li>
              <li>Febre</li>
              <li>Cansaço</li>
              <li>Dificuldade para respirar (em casos graves)</li>
            </ul>
        </div>
      </div>
      <div className='section-titulo'>
          <SocialMedia></SocialMedia>
      </div>
    </>
  );
};

export default PageContent;
