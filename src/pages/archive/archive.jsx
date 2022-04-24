import React from 'react';
import Board from '../../components/board/board';
import Header from '../../components/header/header';
import { observer } from 'mobx-react-lite';
import { events } from '../../store/index';

const Archive = observer(() => {
  const { archiveData } = events;

  return (
    <>
      <Header />
      <section class="main__wrapper">
        <Board events={archiveData} />
      </section>
    </>
  );
});

export default Archive;
