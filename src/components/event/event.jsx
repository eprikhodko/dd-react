import React, { useState } from 'react';
import moment from 'moment';

const Event = ({ eventID, theme, comment, date }) => {
  console.log(theme, comment, date);

  const formatDate = moment(date).format('YYYY-MM-DDTHH:mm');
  console.log(formatDate);

  const [form, setForm] = useState({
    theme: '',
    comment: '',
    date: new Date(),
  });

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  console.log('current form state:', form);

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
          value={theme}
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
          value={comment}
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
          value={formatDate}
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
