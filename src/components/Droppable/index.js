import React, { Component } from 'react';

export default class Droppable extends Component {

  handleDrop = (e) => {
    console.log(e.dataTransfer.getData('itemToBeDragged'));
  }

  handleDragOver = (e) => {
    e.preventDefault();
  }

  render() {
    const { children } = this.props;
    return (<div onDrop={this.handleDrop} onDragOver={this.handleDragOver}> DDrop Drop</div>);
  }
}