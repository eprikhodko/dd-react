import React from 'react';
import Header from '../../components/header/header';
import Filter from '../../components/filter/filter';
import Event from '../../components/event/event';
import { AppRoute } from '../../const.js';

const Form = (props) => {
  const { id } = props.match.params;
  return (
    <>
      <Header mode={AppRoute.MAIN} />
      <section className="main__wrapper">
        <Filter />
        <section className="board">
          <Event eventID={id} />
        </section>
      </section>
    </>
  );
};

export default Form;
