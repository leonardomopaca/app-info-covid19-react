

import React, { useEffect, useState } from 'react';

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

import api from '../../services/api';
import dataAtualFormatada from '../../utils/dataAtualFormatada';
import dataAnteiorFormatada from '../../utils/dataAnteriorFormatada';

interface IApiInfo {
  author: string;
  nome_api: string;
  nome_app: string;
  cidade: string;
  uf: string;
}
interface IApiDados {
  status: boolean;
  dados: {
    confirmados: string;
    data: string;
    descartados: string;
    obitos: string;
    recuperados: string;
    suspeitos: string;
  };
}

function Landing() {
  const [apiInfo, setApiInfo] = useState<IApiInfo>({} as IApiInfo);
  const [apiDados, setApiDados] = useState<IApiDados>({} as IApiDados);

  useEffect(() => {
    api.get('api').then((response) => {
      setApiInfo(response.data);
    });
  }, []);

  useEffect(() => {
    const date = dataAtualFormatada();
    buscaDadosDataAnterior(date);
  }, []);

  function buscaDadosDataAnterior(date: String) {
    api.get(`api/dados/${date}`).then((response) => {
      if (!response.data.status) {
        let dataAnterior = dataAnteiorFormatada(date);
        buscaDadosDataAnterior(dataAnterior);
      } else {
        setApiDados(response.data);
      }
    });
  }

  return (
    <>
      <div id='page-landing'>
        <PageHeader nomeApp={apiInfo.nome_app}></PageHeader>
        <div className='landing-header'>
          <CardHeader
            data={apiDados.status ? apiDados.dados.data : dataAtualFormatada()}
            cidade={apiDados.status ? apiInfo.cidade : ''}
            uf={apiDados.status ? apiInfo.uf : ''}
          ></CardHeader>
        </div>

        <section className='flex'>
          <div className='landing-content'>
            <CardDados
              data={apiDados.status ? Number(apiDados.dados.confirmados) : 0}
              label='Casos Confirmados'
              afterClass='after-confirmados'
              lbClass='lb-confirmados'
            ></CardDados>
            <CardDados
              data={apiDados.status ? Number(apiDados.dados.descartados) : 0}
              label='Casos Descartados'
              afterClass='after-descartados'
              lbClass='lb-descartados'
            ></CardDados>
          </div>
          <div className='landing-content'>
            <CardDados
              data={apiDados.status ? Number(apiDados.dados.suspeitos) : 0}
              label='Casos suspeitos'
              afterClass='after-suspeito'
              lbClass='lb-suspeito'
            ></CardDados>
            <CardDados
              data={apiDados.status ? Number(apiDados.dados.obitos) : 0}
              label='Óbitos'
              afterClass='after-obito'
              lbClass='lb-obito'
            ></CardDados>
          </div>
          <div className='landing-content'>
            <CardDados
              data={apiDados.status ? Number(apiDados.dados.recuperados) : 0}
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
