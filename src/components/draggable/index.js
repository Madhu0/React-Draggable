import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class Draggable extends Component {

  constructor(props) {
    super(props);
    this.id = (new Date()).getTime() + '';
  }

  handleDragStart = (e) => {
    // console.log(e);
    // This should customizable, whether a image link from prop or component from prop
    const { dragImageLink, dragComponent } = this.props;
    let dragComp;
    if (dragImageLink) {
      dragComp = document.createElement('img');
      dragComp.src = dragImageLink;
      e.dataTransfer.setDragImage(dragComp, 0, 0);
    }
    else {
      const container = document.getElementById('dragImage-' + this.id);
      // const TempComp = () => (<div>Abc</div>);
      ReactDOM.render(dragComponent, container);
      e.dataTransfer.setDragImage(container, 0, 0);
    }
    // e.dataTransfer.setDragImage(dragComp, 0, 0);
  }

  render() {
    const { children, className } = this.props;
    return (<div className={className} draggable={true} onDragStart={this.handleDragStart}>
      <div id={`dragImage-${this.id}`} style={{ transform: 'translate(-500px)' }}></div>
      {children}
    </div>);
  }
}