import React from 'react';
import Header from '../../components/header/header';
import Filter from '../../components/filter/filter';
import Event from '../../components/event/event';
import { AppRoute } from '../../const.js';

const Form = () => {
  return (
    <>
      <Header mode={AppRoute.MAIN} />
      <section className="main__wrapper">
        <Filter />
        <section class="board">
          <Event />
        </section>
      </section>
    </>
  );
};

export default Form;
