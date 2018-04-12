import React, { Component, PropTypes } from 'react';

export default class Draggable extends Component {

  handleDragStart = (e) => {
    console.log(e);
    e.dataTransfer.setData('itemToBeDragged', e.target);
  }

  render() {
    const { children } = this.props;
    return (<div draggable={true} onDragStart={this.handleDragStart}>
      {children}
    </div>);
  }
}