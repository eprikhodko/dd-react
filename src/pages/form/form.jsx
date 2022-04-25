import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import Event from '../../components/event/event';
import Filter from '../../components/filter/filter';
import { useParams } from 'react-router-dom';
import { getEvent } from '../../api';

const Form = () => {
  const { id } = useParams();

  const [eventData, setEventData] = useState({});

  useEffect(() => {
    const getEventData = async (evtID) => {
      const response = await getEvent(evtID);

      // console.log(response);
      setEventData(response);
      return response;
    };

    getEventData(id);
  }, []);

  return (
    <>
      <Header />
      <section className="main__wrapper">
        <Filter />
        <section className="board">
          <Event id={id} {...eventData} />
        </section>
      </section>
    </>
  );
};

export default Form;
