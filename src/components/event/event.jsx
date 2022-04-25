import React, { useEffect, useState } from 'react';
import { events } from '../../store';
import moment from 'moment';
import { getEvent } from '../../api';

const Event = ({ eventID }) => {
  console.log('this is event id:', eventID);
  const formatDate = moment(new Date()).format('YYYY-MM-DDTHH:mm');

  const [eventData, setEventData] = useState(null);
  console.log('this is event data', eventData);

  const { _id, theme, comment, date, favorite, archive } = eventData || {};

  useEffect(() => {
    const getEventData = async (evtID) => {
      const response = await getEvent(evtID);

      // console.log(response);
      setEventData(response);
      return response;
    };

    getEventData(eventID);
  }, []);

  // установим начальное значение полей формы
  const [form, setForm] = useState({
    theme: 'theme',
    comment: 'comment',
    date: formatDate,
  });

  // если мы находимся на странице какого то ивента, и у нас есть данные этого ивента, передадим в форму данные этого ивента
  useEffect(() => {
    if (eventData) {
      console.log('im triggered');
      setForm({
        theme: theme,
        comment: comment,
        date: date,
      });
    }
  }, [eventData]);

  // console.log(id, theme, comment, date, favorite, archive);

  // console.log(date);
  // console.log(formatDate);

  // const setRightDate = () => {
  //   if (date) {
  //     return date;
  //   } else {
  //     return new Date();
  //   }
  // };

  // const currentDate = new Date();
  // console.log(currentDate);

  // const [formatDate, setFormatDate] = useState('');
  // console.log(formatDate);

  // useEffect(() => {
  //   setFormatDate(moment(date).format('YYYY-MM-DDTHH:mm'));
  //   console.log('use effect date', formatDate);
  // }, [date]);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // const handleDate = (event) => {
  //   console.log(event.target.value);
  //   setForm({
  //     date: event.target.value,
  //   });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted form:', form);

    if (eventID) {
      events.editEvent({
        id: _id,
        theme: form.theme,
        comment: form.comment,
        date: form.date,
        favorite,
        archive,
      });
    } else {
      events.addEvent({
        theme: form.theme,
        comment: form.comment,
        date: form.date,
        favorite: false,
        archive: false,
      });
    }
  };

  console.log('current form data:', form);

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

        <button type="reset" className="btn-reset">
          Очистить
        </button>
      </div>
    </form>
  );
};

export default Event;
