import React from 'react';
import Main from '../../pages/main/main';
import Archive from '../../pages/archive/archive';
import Form from '../../pages/form/form';
import NotFound from '../../pages/not-found/not-found';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../const';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <Main />
        </Route>
        <Route path={AppRoute.ARCHIVE} exact component={Archive} />
        <Route path={AppRoute.EVENT} exact component={Form} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
