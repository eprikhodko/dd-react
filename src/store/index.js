import { makeAutoObservable, onBecomeObserved } from 'mobx';
import { getEvents } from '../api';

class EventStore {
  _id;
  theme = '';
  comment = '';
  date = new Date();
  archive = false;
  favorite = false;

  constructor({ _id, theme, comment, date, archive, favorite }) {
    makeAutoObservable(
      this,
      {},
      {
        autoBind: true,
      }
    );

    this._id = _id;
    this.theme = theme;
    this.comment = comment;
    this.date = date;
    this.archive = archive;
    this.favorite = favorite;
  }
}

class EventsStore {
  data = [];

  constructor() {
    makeAutoObservable(
      this,
      {},
      {
        autoBind: true,
      }
    );

    onBecomeObserved(this, 'data', this.fetch);
  }

  *fetch() {
    const response = yield getEvents();
    this.data = response.map((event) => new EventStore(event));
  }
}

export const events = new EventsStore();
