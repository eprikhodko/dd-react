import React from 'react';
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';
import { events } from '../../store/index';

const { notArchiveData, sortedByNewData, sortedByOldData } = events;

const handleFiltred = action((e) => {
  events.filtredData = events[e.target.value];
});

const Sorting = observer(() => {
  return (
    <div className="board__filter-list">
      <span className="board__filter--title">Сортировка:</span>
      <input
        type="radio"
        id="board__filter-default"
        className="board__filter visually-hidden"
        name="board-filter"
        value={'notArchiveData'}
        onClick={handleFiltred}
      />
      <label htmlFor="board__filter-default" className="board__filter-label">
        По умолчанию
      </label>

      <input
        type="radio"
        id="board__filter-new"
        className="board__filter visually-hidden"
        name="board-filter"
        value={'sortedByNewData'}
        onClick={handleFiltred}
      />
      <label htmlFor="board__filter-new" className="board__filter-label">
        Сначала новые
      </label>

      <input
        type="radio"
        id="board__filter-old"
        className="board__filter visually-hidden"
        name="board-filter"
        value={'sortedByOldData'}
        onClick={handleFiltred}
      />
      <label htmlFor="board__filter-old" className="board__filter-label">
        Сначала старые
      </label>
    </div>
  );
});

export default Sorting;
