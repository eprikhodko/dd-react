import React from 'react';
import Header from '../../components/header/header';
import Event from '../../components/event/event';
import Filter from '../../components/filter/filter';
import { useParams } from 'react-router-dom';

const Form = ({ events }) => {
  const { id } = useParams();

  const getEventData = (eventIdentifier, eventsObjectsArray) => {
    const filteredEvent = eventsObjectsArray.filter(
      (event) => event._id === eventIdentifier
    );

    return filteredEvent[0];
  };

  const eventData = getEventData(id, events);

  return (
    <>
      <Header />
      <section className="main__wrapper">
        <Filter />
        <section className="board">
          <Event eventID={id} {...eventData} />
        </section>
      </section>
    </>
  );
};

export default Form;
