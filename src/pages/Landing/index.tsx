import React from 'react';

/**
 *  Parametros do CardDados
 * after-confirmados  lb-confirmados
 * after-descartados  lb-descartados
 * after-suspeito  lb-suspeito
 * after-obito  lb-obito
 * after-recuperados lb-recuperados
 */

import './styles.css';
import PageHeader from '../../components/PageHeader';
import CardHeader from '../../components/CardHeader';
import CardDados from '../../components/CardDados';
import PageContent from '../../components/PageContent';
import PageFooter from '../../components/PageFooter';

function Landing() {
  return (
    <>
      <div id='page-landing'>
        <PageHeader></PageHeader>
        <div className='landing-header'>
          <CardHeader></CardHeader>
        </div>

        <section className='flex'>
          <div className='landing-content'>
            <CardDados
              label='Casos Confirmados'
              afterClass='after-confirmados'
              lbClass='lb-confirmados'
            ></CardDados>
            <CardDados
              label='Casos Descartados'
              afterClass='after-descartados'
              lbClass='lb-descartados'
            ></CardDados>
          </div>
          <div className='landing-content'>
            <CardDados
              label='Casos suspeitos'
              afterClass='after-suspeito'
              lbClass='lb-suspeito'
            ></CardDados>
            <CardDados
              label='Óbitos'
              afterClass='after-obito'
              lbClass='lb-obito'
            ></CardDados>
          </div>
          <div className='landing-content'>
            <CardDados
              label='Recuperados'
              afterClass='after-recuperados'
              lbClass='lb-recuperados'
            ></CardDados>
          </div>
        </section>

        <section className='section-content'>
          <PageContent></PageContent>
        </section>

        <PageFooter></PageFooter>
        
      </div>

    </>
  );
}

export default Landing;
