import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';

function Landing() {
  return(
    <div id='page-landing'>
      <PageHeader></PageHeader>
      <div className="landing-content">
        <div>
          Pagina principal
        </div>
        <div>
          Pagina principal
        </div>
      </div>
    </div>
  )
}

export default Landing;