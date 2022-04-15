import React from "react";

const Sorting = () => {
  return (
    <div class="board__filter-list">
      <span class="board__filter--title">Сортировка:</span>
      <input
        type="radio"
        id="board__filter-default"
        class="board__filter visually-hidden"
        name="board-filter"
        checked
      />
      <label for="board__filter-default" class="board__filter-label">
        По умолчанию
      </label>
      <input
        type="radio"
        id="board__filter-new"
        class="board__filter visually-hidden"
        name="board-filter"
      />
      <label for="board__filter-new" class="board__filter-label">
        Сначала новые
      </label>
      <input
        type="radio"
        id="board__filter-old"
        class="board__filter visually-hidden"
        name="board-filter"
      />
      <label for="board__filter-old" class="board__filter-label">
        Сначала старые
      </label>
    </div>
  );
};

export default Sorting;
