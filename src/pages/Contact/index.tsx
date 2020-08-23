import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import SocialMedia from '../../components/SocialMedia';
import PageFooter from '../../components/PageFooter';

interface IApiInfo {
  author: string;
  nome_api: string;
  nome_app: string;
  cidade: string;
  uf: string;
}

function Contact() {
  const [apiInfo, setApiInfo] = useState<IApiInfo>({} as IApiInfo);

  useEffect(() => {
    api.get('api').then((response) => {
      setApiInfo(response.data);
    });
  }, []);

  return (
    <>
      <div id='page-contact'>
        <PageHeader nomeApp={apiInfo.nome_app}></PageHeader>

        <div className='contact-content'>
          <ul>
            <li>Nome: Antônio Abrantes</li>
            <li>Formado em Análise e Desenvolvimento de Sistemas</li>
            <li>Pós graduado em Engenharia de Software</li>
            <li>Pós graduando em Desenvolvimento de Tecnologias Web Mobile</li>
          </ul>
          <SocialMedia></SocialMedia>
        </div>

        <PageFooter></PageFooter>
      </div>
    </>
  );
}

export default Contact;
