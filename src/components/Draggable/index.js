import React, { Component, PropTypes } from 'react';
import { Consumer } from '../wrapper';
import './index.scss';

class Draggable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemMoved: false,
    };
  }

  handleDragStart = (e) => {
    const { children } = this.props;
    e.dataTransfer.setData('text/plain', 'adcdefgh');
    this.props.eventHandlers.onDragStart('adcdefgh', children);
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

  render() {
    const { children } = this.props;
    return (<div draggable={true} onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd} className="container-draggable">
      {!this.state.itemMoved && <div id="12345">{children}</div>}
    </div>);
  }
}

export default (props) => (<Consumer>
  {(handlers) => <Draggable {...props} eventHandlers={handlers}/>}
</Consumer>);