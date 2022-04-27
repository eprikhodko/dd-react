import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { AppRoute } from '../../const';
import Card from '../card/card';
import LoadMore from '../load-more/load-more';
import Sorting from '../sorting/sorting';
import { deleteArchiveEvents } from '../../api';

const Board = ({ events }) => {
  const { pathname } = useLocation();
  const history = useHistory();

  const [step, setStep] = useState(1);

  const handleLoadMore = () => {
    events.length >= step ? setStep(step + 1) : setStep(events.length);
  };

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
        {events.slice(0, step).map((event) => (
          <Card event={event} key={event._id} />
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

      <LoadMore handleLoadMore={handleLoadMore} />
    </section>
  );
};

export default Board;
