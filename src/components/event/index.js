export default class EventOrganizer {
  constructor(eventsList) {
    this.eventListeners = {};
    this.init(eventsList);
  }

  init = (list) => {
    list.forEach((item) => {
      this.eventListeners[item] = {};
    });
  }

  addEventListener = (event, callback) => {
    const key = (new Date()).getTime();
    this.eventListeners[event][key] = callback;
    return () => {
      delete this.eventListeners[event][key];
    }
  }

  dispatchEvent = (event, data) => {
    Object.keys(this.eventListeners[event]).forEach((callback) => {
      callback(data);
    });
  }
}