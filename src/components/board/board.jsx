import React from 'react';
import Card from '../card/card';
import LoadMore from '../load-more/load-more';
import Sorting from '../sorting/sorting';
// import Event from '../event/event';
// import NoEvents from '../no-events/no-events';

const Board = () => {
  return (
    <section className="board">
      <Sorting />
      <div className="board__events">
        <Card />
      </div>
      <LoadMore />
      {/* <Event /> */}
      {/* <NoEvents /> */}
    </section>
  );
};

export default Board;
