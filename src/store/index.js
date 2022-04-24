import { makeAutoObservable } from 'mobx';

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
  data = [
    {
      _id: '622b3c3827c135009e310b26',
      theme: 'Lorem Ipsum is simply dummy text of the printing',
      comment:
        'Lorem Ipsum has been the industrys standard dummy text ever since theme. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.',
      date: '2022-03-18T20:36:34.068Z',
      archive: false,
      favorite: true,
    },
  ];

  constructor() {
    makeAutoObservable(
      this,
      {},
      {
        autoBind: true,
      }
    );
  }
}

export const events = new EventsStore();
