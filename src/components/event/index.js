var Wrapper = (eventsList) => {
  // Shoudn't expose this object
  eventListeners = {};
  class EventOrganizer {
    constructor(eventsList) {
      this.init(eventsList);
    }

    init = (list) => {
      list.forEach((item) => {
        eventListeners[item] = {};
      });
    }

    addEventListener = (event, callback) => {
      const key = (new Date()).getTime();
      eventListeners[event][key] = callback;
      return () => {
        delete eventListeners[event][key];
      }
    }

    dispatchEvent = (event, data) => {
      Object.keys(eventListeners[event]).forEach((callback) => {
        callback(data);
      });
    }
  }
  Wrapper.prototype = new EventOrganizer();
}

export default Wrapper