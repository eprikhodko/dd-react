import React from 'react';
import Board from '../../components/board/board';
import Header from '../../components/header/header';
import { AppRoute } from '../../const';

const Archive = (props) => {
  return (
    <>
      <Header />
      <section class="main__wrapper">
        <Board mode={AppRoute.ARCHIVE} />
      </section>
    </>
  );
};

export default Archive;
