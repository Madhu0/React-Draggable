import React, { Component, createContext } from 'react';

const Context = createContext({});

export default (WrappedComponent) => (class Wrapper extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dragElements: {},
    };
  }

  handleDragStart = (key, element) => {
    this.setState({
      dragElements: Object.assign({}, this.state.dragElements, { [key]: element }),
    });
  }

  handleDragEnd = (key) => {
    this.setState({
      dragElements: Object.assign({}, this.state.dragElements, { [key]: null }),
    });
  }

  getComponent = (key) => {
    return this.state.dragElements[key];
  }

  render() {
    return (<Context.Provider value={{
      onDragStart: this.handleDragStart,
      onDragEnd: this.handleDragEnd,
      getComponent: this.getComponent,
    }}>
        <WrappedComponent {...this.props} />
    </Context.Provider>)
  }
});

export const Consumer = Context.Consumer;

