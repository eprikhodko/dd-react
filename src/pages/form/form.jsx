import React from 'react';
import Header from '../../components/header/header';
import Event from '../../components/event/event';
import Filter from '../../components/filter/filter';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { events } from '../../store';

const Form = observer(() => {
  const { id } = useParams();
  const { allData } = events;

  const event = allData.filter((x) => x._id === id);

  // console.log(
  //   'found event',
  //   allData.filter((x) => x._id === id)
  // );

  // const { _id, theme, comment, date, favorite, archive } = event[0];
  // console.log(_id, theme, comment, date, favorite, archive);

  // const [eventData, setEventData] = useState({});

  // useEffect(() => {
  //   const getEventData = async (evtID) => {
  //     const response = await getEvent(evtID);

  //     // console.log(response);
  //     setEventData(response);
  //     return response;
  //   };

  //   getEventData(id);
  // }, []);

  return (
    <>
      <Header />
      <section className="main__wrapper">
        <Filter />
        <section className="board">
          <Event id={id} {...event[0]} />
        </section>
      </section>
    </>
  );
});

export default Form;
