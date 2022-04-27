import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { events } from '../../store';
import moment from 'moment';
import { getEvent } from '../../api';

const Event = ({ eventID }) => {
  const [eventData, setEventData] = useState(null);
  const { _id, theme, comment, date, favorite, archive } = eventData || {};

  const history = useHistory();
  const currentDate = moment(new Date()).format('YYYY-MM-DDTHH:mm');
  // установим начальное значение полей формы, для страницы создания нового ивента
  const [form, setForm] = useState({
    theme: '',
    comment: '',
    date: currentDate,
  });

  // получим данные ивента по его id
  useEffect(() => {
    // если у нас есть id ивента, сделаем запрос к серверу,
    if (eventID) {
      const getEventData = async (evtID) => {
        const response = await getEvent(evtID);

        setEventData(response);
        return response;
      };

      getEventData(eventID);
    }
  }, []);

  // если мы получили данные ивента по его id, передадим их в форму. Это нужно для того, чтобы поля нашей формы были заполнены, когда мы открываем на редактирования какой либо ивент
  useEffect(() => {
    if (eventData) {
      setForm({
        theme: theme,
        comment: comment,
        date: date,
      });
    }
  }, [eventData]);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted form:', form);

    if (eventID) {
      events
        .editEvent({
          id: _id,
          theme: form.theme,
          comment: form.comment,
          date: form.date,
          favorite,
          archive,
        })
        .then(() => history.push('/'));
    } else {
      events
        .addEvent({
          theme: form.theme,
          comment: form.comment,
          date: form.date,
          favorite: false,
          archive: false,
        })
        .then(() => history.push('/'));
    }
  };

  const handleClearForm = () => {
    setForm({
      theme: '',
      comment: '',
      date: currentDate,
    });
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
          value={form.theme}
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
          value={form.comment}
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
          required
          value={form.date}
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

        <button type="reset" onClick={handleClearForm} className="btn-reset">
          Очистить
        </button>
      </div>
    </form>
  );
};

export default Event;
