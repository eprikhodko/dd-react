import React from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import Card from '../card/card';
import LoadMore from '../load-more/load-more';
import Sorting from '../sorting/sorting';
import { AppRoute } from '../../const';

const Board = () => {
  const { pathname } = useLocation();

  return (
    <section className="board">
      {pathname !== AppRoute.ARCHIVE && <Sorting />}


      <div className="board__events">
        <Card />
      </div>
      <LoadMore />
    </section>
  );
};

export default Board;
