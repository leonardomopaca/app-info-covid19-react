import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Contact from './pages/Contact';

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Landing}></Route>
      <Route path='/contact' component={Contact}></Route>
    </BrowserRouter>
  );
}
export default Routes;
