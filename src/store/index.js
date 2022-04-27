import { makeAutoObservable, onBecomeObserved } from 'mobx';
import { getEvents, addEvent, editEvent, deleteEvent } from '../api';
import moment from 'moment';

class EventsStore {
  data = [];
  filtredData = [];
  sortedByNew = [];
  sortedByOld = [];

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
    // console.log(this.data);
    return this.data.slice().sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.date) - new Date(a.date);
    });
  }

  get sortedByOldData() {
    // console.log(this.data);

    return this.data.slice().sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(a.date) - new Date(b.date);
    });
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
    this.sortedByNew = response.slice().sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(a.date) - new Date(b.date);
    });
    this.sortedByOld = response.slice().sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.date) - new Date(a.date);
    });
    // console.log('original response:', response);
    // const sortedResponse = response.slice().sort(function (a, b) {
    //   // Turn your strings into dates, and then subtract them
    //   // to get a value that is either negative, positive, or zero.
    //   return new Date(a.date) - new Date(b.date);
    // });
    // console.log('sorted response', sortedResponse);

    // console.log(response[0].date);
    // console.log(new Date(response[0].date));
    // const formatDate = moment(response[0].date);
    // console.log(formatDate);
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
