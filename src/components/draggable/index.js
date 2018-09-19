import React, { Component, PropTypes } from 'react';

export default class Draggable extends Component {

  handleDragStart = (e) => {
    // console.log(e);
    // This should customizable, whether a image link from prop or component from prop
    const { dragImageLink } = this.props;
    let dragComp;
    if (dragImageLink) {
      dragComp = document.createElement('img');
      dragComp.src = dragImageLink;
      e.dataTransfer.setDragImage(dragComp, 0, 0);
    }
    // else {
    //   dragComp.style.transform = 'translateX(--500px)';
    //   document.getElementsByTagName('body')[0].appendChild(dragComp)
    // }
    // e.dataTransfer.setDragImage(dragComp, 0, 0);
  }

  render() {
    const { children, className } = this.props;
    return (<div className={className} draggable={true} onDragStart={this.handleDragStart}>
      {children}
    </div>);
  }
}