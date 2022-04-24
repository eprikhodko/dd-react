import React from 'react';
import Main from '../../pages/main/main';
import Archive from '../../pages/archive/archive';
import Form from '../../pages/form/form';
import NotFound from '../../pages/not-found/not-found';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../const';

const App = ({ events }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <Main events={events} />
        </Route>
        <Route path={AppRoute.ARCHIVE} exact>
          <Archive events={events} />
        </Route>
        <Route path={AppRoute.EVENT} exact>
          <Form events={events} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
