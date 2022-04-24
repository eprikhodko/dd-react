import React from 'react';
import Main from '../../pages/main/main';
import Archive from '../../pages/archive/archive';
import Form from '../../pages/form/form';
import NotFound from '../../pages/not-found/not-found';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import { observer } from 'mobx-react-lite';
// import { events } from '../../store/index';

const App = observer(() => {
  // const { data } = events;

  // console.log(events);

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <Main />
        </Route>
        <Route path={AppRoute.ARCHIVE} exact>
          <Archive />
        </Route>
        <Route path={AppRoute.EVENT} exact>
          {/* <Form events={data} /> */}
          <Form />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
});

export default App;
