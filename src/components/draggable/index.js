import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Consumer } from '../wrapper';
import eventManager from '../../helpers/eventManager';

class Draggable extends Component {

  constructor(props) {
    super(props);
    this.id = (new Date()).getTime() + '';
    this.state = {
      itemMoved: false
    };
  }

  handleDragEnd = (e) => {
    console.log(e);
    if (e.dataTransfer.dropEffect !== 'none') {
      this.setState({
        itemMoved: true,
      });
      this.props.eventHandlers.onDragEnd('adcdefgh');
    }
  }

  handleDragStart = (e) => {
    // console.log(e);
    // This should customizable, whether a image link from prop or component from prop
    const { dragImageLink, dragComponent, isDomNode = false } = this.props;
    e.dataTransfer.setData('text/plain', 'adcdefgh');
    this.props.eventHandlers.onDragStart('adcdefgh', this.props.children);
    eventManager.dispatchEvent('dragStart', 'adcdefgh');
    let dragComp;
    if (dragImageLink) {
      dragComp = document.createElement('img');
      dragComp.src = dragImageLink;
      e.dataTransfer.setDragImage(dragComp, 0, 0);
    }
    else if (isDomNode){
      const container = document.getElementById('dragImage-' + this.id);
      e.dataTransfer.setDragImage(container, 0, 0);
    } else {
      const container = document.getElementById('dragImage-' + this.id);
      ReactDOM.render(dragComponent, container);
      e.dataTransfer.setDragImage(container, 0, 0);
    }
  }

  render() {
    const { children, className } = this.props;
    return (<div className={className} draggable={true} onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd}>
      <div id={`dragImage-${this.id}`} style={{ transform: 'translate(-1000px)', position: "absolute", top: '-1000px', left: '-1000px' }}></div>
      {!this.state.itemMoved && <div id="12345">{children}</div>}
    </div>);
  }
}

export default (props) => (<Consumer>
  {(handlers) => <Draggable {...props} eventHandlers={handlers}/>}
</Consumer>);