import React from 'react';
import Header from '../../components/header/header';
import Event from '../../components/event/event';
import Filter from '../../components/filter/filter';
import { useParams } from 'react-router-dom';

const Form = ({ events }) => {
  // console.log(events);
  const { id } = useParams();
  // console.log(id);

  const getEventData = (eventIdentifier, eventsObjectsArray) => {
    const filteredEvent = eventsObjectsArray.filter(
      (event) => event._id === eventIdentifier
    );

    return filteredEvent[0];
  };

  const eventData = getEventData(id, events);
  const { theme, comment, date } = eventData || {};

  return (
    <>
      <Header />
      <section className="main__wrapper">
        <Filter />
        <section className="board">
          <Event eventID={id} theme={theme} comment={comment} date={date} />
        </section>
      </section>
    </>
  );
};

export default Form;
