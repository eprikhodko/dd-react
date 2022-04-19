import React from 'react';
import Board from '../../components/board/board';
import Header from '../../components/header/header';

const Archive = (props) => {
  return (
    <>
      <Header />
      <section class="main__wrapper">
        <Board />
      </section>
    </>
  );
};

export default Archive;
