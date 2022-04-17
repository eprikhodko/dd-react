import React from 'react';
import Main from '../../pages/main/main';
import Archive from '../../pages/archive/archive';
import Form from '../../pages/form/form';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../const';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path={AppRoute.ARCHIVE} exact component={Archive} />
      </Switch>
    </BrowserRouter>
    // <Form />
  );
};

export default App;
