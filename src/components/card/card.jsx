import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ _id, theme, comment, date, favorite }) => {
  return (
    <article className="card">
      <div className="card__form">
        <div className="card__inner">
          <div className="card__control">
            <Link to={`/event/${_id}`} className="card__btn card__btn--edit">
              Редактировать
            </Link>
            <button type="button" className="card__btn card__btn--archive">
              В архив
            </button>
            <button type="button" className="card__btn card__btn--favorites">
              В избранное
            </button>
            <button type="button" className="card__btn card__btn--remove">
              Удалить
            </button>
          </div>

          <div className="card__textarea-wrap">
            <p className="card__text--theme">{theme}</p>
            <p className="card__text--comment">{comment}</p>
          </div>

          <div className="card__settings">
            <span className="card__date">{date}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
