import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { AppRoute } from '../../const';
import Card from '../card/card';
import LoadMore from '../load-more/load-more';
import Sorting from '../sorting/sorting';
import { deleteArchiveEvents } from '../../api';

const Board = ({ events }) => {
  const { pathname } = useLocation();
  const history = useHistory();

  const handleDeleteArchiveEvents = () => {
    deleteArchiveEvents();
    setTimeout(() => {
      history.go(0);
    }, 1000);
  };

  return (
    <section className="board">
      {pathname !== AppRoute.ARCHIVE && <Sorting />}

      <div className="board__events">
        {events.map((event) => (
          <Card {...event} key={event._id} />
        ))}
      </div>

      {pathname === AppRoute.ARCHIVE && (
        <button
          type="button"
          onClick={handleDeleteArchiveEvents}
          className="not-found__link"
        >
          Удалить все записи в архиве
        </button>
      )}

      <LoadMore />
    </section>
  );
};

export default Board;
