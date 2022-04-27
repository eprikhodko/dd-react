import { makeAutoObservable, onBecomeObserved } from 'mobx';
import { getEvents, addEvent, editEvent, deleteEvent } from '../api';
import moment from 'moment';

class EventsStore {
  data = [];
  filtredData = [];

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

  get sortedByNewData() {
    return this.data
      .slice()
      .sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      })
      .filter((x) => !x.archive);
  }

  get sortedByOldData() {
    return this.data
      .slice()
      .sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
      })
      .filter((x) => !x.archive);
  }

  get archiveData() {
    return this.data.filter((x) => x.archive);
  }

  get notArchiveData() {
    return this.data.filter((x) => !x.archive);
  }

  get pastData() {
    return this.data.filter(
      (x) => moment(x.date).isBefore(moment(), 'day') && !x.archive
    );
  }

  get todayData() {
    return this.data.filter(
      (x) => moment(x.date).isSame(moment(), 'day') && !x.archive
    );
  }

  get futureData() {
    return this.data.filter(
      (x) => moment(x.date).isAfter(moment(), 'day') && !x.archive
    );
  }

  get favoriteData() {
    return this.data.filter((x) => x.favorite && !x.archive);
  }

  *fetch() {
    const response = yield getEvents();
    this.data = response;
    this.filtredData = response.filter((x) => !x.archive);
  }

  *addEvent(data) {
    yield addEvent(data);
    yield this.fetch();
  }

  *editEvent(data) {
    yield editEvent(data);
    yield this.fetch();
  }

  *deleteEvent(id) {
    yield deleteEvent(id);
    yield this.fetch();
  }
}

export const events = new EventsStore();
