import React from 'react';
import Header from '../../components/header/header';
import Filter from '../../components/filter/filter';
import Board from '../../components/board/board';
import { observer } from 'mobx-react-lite';
import { events } from '../../store';

const Main = observer(() => {
  const { notArchiveData } = events;

  console.log('events from main', events);

  return (
    <>
      <Header />
      <section className="main__wrapper">
        <Filter />
        <Board events={notArchiveData} />
      </section>
    </>
  );
});

export default Main;
