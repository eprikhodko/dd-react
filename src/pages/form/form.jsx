import React from 'react';
import Header from '../../components/header/header';
import Event from '../../components/event/event';
import Filter from '../../components/filter/filter';
import { useParams } from 'react-router-dom';

const Form = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
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
