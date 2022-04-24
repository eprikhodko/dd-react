import React, { useState } from 'react';
import moment from 'moment';

const Event = ({ eventID, theme, comment, date }) => {
  const formatDate = moment(date).format('YYYY-MM-DDTHH:mm');

  const setRightDate = () => {
    if (date) {
      return date;
    } else {
      return new Date();
    }
  };

  const [form, setForm] = useState({
    theme: theme,
    comment: comment,
    date: setRightDate(),
  });

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted form:', form);
  };

  return (
    <form className="board__form" onSubmit={handleSubmit}>
      <h2 className="board__title">
        {eventID ? 'Редактирование события' : 'Добавление события'}
      </h2>

      <fieldset className="board__field board__field--theme">
        <label htmlFor="theme" className="board__label board__label--theme">
          Тема:
        </label>
        <textarea
          type="text"
          onChange={handleFieldChange}
          className="board__input board__input--theme"
          name="theme"
          required
          defaultValue={theme}
        ></textarea>
      </fieldset>
      <fieldset className="board__field board__field--comment">
        <label htmlFor="comment" className="board__label board__label--comment">
          Комментарий:
        </label>
        <textarea
          type="text"
          onChange={handleFieldChange}
          className="board__input board__input--comment"
          name="comment"
          required
          defaultValue={comment}
        ></textarea>
      </fieldset>
      <fieldset className="board__field board__field--date">
        <label htmlFor="date" className="board__label board__label--date">
          Дата:
        </label>
        <input
          type="datetime-local"
          onChange={handleFieldChange}
          className="board__input board__input--date"
          name="date"
          defaultValue={formatDate}
        />
      </fieldset>
      <div className="btns">
        {eventID ? (
          <button type="submit" className="btn-submit">
            Сохранить
          </button>
        ) : (
          <button type="submit" className="btn-submit">
            Добавить
          </button>
        )}

        <button type="reset" className="btn-reset">
          Очистить
        </button>
      </div>
    </form>
  );
};

export default Event;
