import { computed, makeAutoObservable, onBecomeObserved } from 'mobx';
import { getEvents, getEvent, addEvent, editEvent, deleteEvent } from '../api';

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
        allData: computed,
        archiveData: computed,
        notArchiveData: computed,
      }
    );

    onBecomeObserved(this, 'data', this.fetch);
  }

  get allData() {
    return this.data.map((event) => new EventStore(event));
  }

  get archiveData() {
    return this.data
      .map((event) => new EventStore(event))
      .filter((x) => x.archive);
  }

  get notArchiveData() {
    return this.data
      .map((event) => new EventStore(event))
      .filter((x) => !x.archive);
  }

  *fetch() {
    const response = yield getEvents();
    this.data = response.map((event) => new EventStore(event));
  }

  *getEvent(id) {
    yield getEvent(id);
    yield this.fetch();
  }

  *addEvent(data) {
    yield addEvent(data);
    yield this.fetch();
  }

  *editEvent(data) {
    console.log(data);
    yield editEvent(data);
    yield this.fetch();
  }

  *deleteEvent(id) {
    yield deleteEvent(id);
    yield this.fetch();
  }
}

export const events = new EventsStore();
