import React from 'react';
import Header from '../../components/header/header';
import Event from '../../components/event/event';
import Filter from '../../components/filter/filter';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
// import { events } from '../../store';
// import Board from '../../components/board/board';
import { getEvent } from '../../api';

const Form = observer(() => {
  const { id } = useParams();

  // console.log('events from form', events);
  // const { notArchiveData } = events;

  // const getSingleEvent = getEvent('6265a8aa495191c0d0ea8138');

  // console.log(getSingleEvent);

  const getSingleEvent = async () => {
    const response = await getEvent(id);
    console.log(response);
  };

  getSingleEvent();

  // const request = async () => {
  //   const response = getEvent('6265a8aa495191c0d0ea8138');

  //   return await response.json();
  // };

  // console.log(request);

  // const getEventData = (eventIdentifier, eventsObjectsArray) => {
  //   const filteredEvent = eventsObjectsArray.filter(
  //     (event) => event._id === eventIdentifier
  //   );

  //   return filteredEvent[0];
  // };

  // const eventData = getEventData(id, events);

  return (
    <>
      <Header />
      <section className="main__wrapper">
        <Filter />
        <section className="board">
          {/* <Event eventID={id} {...eventData} /> */}
          {/* <Board events={notArchiveData} /> */}
        </section>
      </section>
    </>
  );
});

export default Form;
