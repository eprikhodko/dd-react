import React from "react";
import Card from "../card/card";
import LoadMore from "../load-more/load-more";

const Board = () => {
  return (
    <section className="board">
      {/* Тут будет сортировка */}
      <div className="board__events">
        <Card />
      </div>
      <LoadMore />
    </section>
  );
};

export default Board;
