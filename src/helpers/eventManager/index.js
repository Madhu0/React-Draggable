import { eventsList as allEvents } from '../constants';

// Need to add stopPropagation functionality on events
const Wrapper = function(eventsList) {
  // Shoudn't expose this object
  const eventListeners = {};

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
      Object.keys(eventListeners[event]).forEach((eventKey) => {
        eventListeners[event][eventKey](data);
      });
    }
  }
  this.__proto__ = new EventOrganizer(eventsList);
}

export default new Wrapper(allEvents);