import React from 'react';
import Home from 'Src/Pages/home/index';
import Test from 'Src/Pages/test/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/test'>
          <Test />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
