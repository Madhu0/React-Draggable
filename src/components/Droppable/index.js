import React, { Component } from 'react';
import { Consumer } from '../wrapper';
import './index.scss'

class Droppable extends Component {

  constructor(props) {
    super(props);
    this.child = null;
    this.state = {
      itemDropped: false,
    };
  }

  handleDrop = (e) => {
    const id = e.dataTransfer.getData('text');
    this.child = this.props.eventHandlers.getComponent(id);
    this.setState({
      itemDropped: true
    });
  }

  handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  render() {
    const { children } = this.props;
    return (<div onDrop={this.handleDrop} onDragOver={this.handleDragOver} className="container-droppable" aria-dropeffect="move">
      {this.state.itemDropped && this.child}
    </div>);
  }
}

export default (props) => (<Consumer>
  {(handlers) => <Droppable {...props} eventHandlers={handlers}/>}
</Consumer>);