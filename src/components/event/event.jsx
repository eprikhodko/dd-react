import React from 'react';

const Event = ({ eventID }) => {
  return (
    <form className="board__form">
      {eventID ? (
        <>
          <h2 className="board__title">Редактирование события</h2>
          <fieldset className="board__field board__field--theme">
            <label htmlFor="theme" className="board__label board__label--theme">
              Тема:
            </label>
            <textarea
              type="text"
              className="board__input board__input--theme"
              name="theme"
              required
            ></textarea>
          </fieldset>
          <fieldset className="board__field board__field--comment">
            <label
              htmlFor="comment"
              className="board__label board__label--comment"
            >
              Комментарий:
            </label>
            <textarea
              type="text"
              className="board__input board__input--comment"
              name="comment"
              required
            ></textarea>
          </fieldset>
          <fieldset className="board__field board__field--date">
            <label htmlFor="date" className="board__label board__label--date">
              Дата:
            </label>
            <input
              type="datetime-local"
              className="board__input board__input--date"
              name="date"
            />
          </fieldset>
          <div className="btns">
            <button type="submit" className="btn-submit">
              Сохранить
            </button>
            <button type="reset" className="btn-reset">
              Очистить
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="board__title">Добавление события</h2>
          <fieldset className="board__field board__field--theme">
            <label htmlFor="theme" className="board__label board__label--theme">
              Тема:
            </label>
            <textarea
              type="text"
              className="board__input board__input--theme"
              name="theme"
              required
            ></textarea>
          </fieldset>
          <fieldset className="board__field board__field--comment">
            <label
              htmlFor="comment"
              className="board__label board__label--comment"
            >
              Комментарий:
            </label>
            <textarea
              type="text"
              className="board__input board__input--comment"
              name="comment"
              required
            ></textarea>
          </fieldset>
          <fieldset className="board__field board__field--date">
            <label htmlFor="date" className="board__label board__label--date">
              Дата:
            </label>
            <input
              type="datetime-local"
              className="board__input board__input--date"
              name="date"
            />
          </fieldset>
          <div className="btns">
            <button type="submit" className="btn-submit">
              Добавить
            </button>
            <button type="reset" className="btn-reset">
              Очистить
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default Event;
