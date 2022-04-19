import React from 'react';
import Card from '../card/card';
import LoadMore from '../load-more/load-more';
import Sorting from '../sorting/sorting';
import { AppRoute } from '../../const';

const Board = ({ mode }) => {
  return (
    <section className="board">
      {mode !== AppRoute.ARCHIVE && <Sorting />}

      <div className="board__events">
        <Card />
      </div>
      <LoadMore />
    </section>
  );
};

export default Board;
