import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import SocialMedia from '../../components/SocialMedia';
import PageFooter from '../../components/PageFooter';

function Contact() {
  return (
    <>
      <div id='page-contact'>
        <PageHeader></PageHeader>

        <section className='flex'>
          <div className='card-total-no-border '>
            <div className='contact-content'>
              <ul>
                <li>Nome: Antônio Abrantes</li>
                <li>Formado em Análise e Desenvolvimento de Sistemas</li>
                <li>Pós graduado em Engenharia de Software</li>
                <li>
                  Pós graduando em Desenvolvimento de Tecnologias Web Mobile
                </li>
              </ul>
            </div>
            <SocialMedia></SocialMedia>
          </div>
        </section>

        <PageFooter></PageFooter>
      </div>
    </>
  );
}

export default Contact;
