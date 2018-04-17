import React, { Component } from 'react';
import { Consumer } from '../wrapper';
import './index.scss'

class Droppable extends Component {

  constructor(props) {
    super(props);
    this.child = null;
    this.state = {
      droppedChildren: [],
    };
  }

  handleDrop = (e) => {
    const id = e.dataTransfer.getData('text');
    const children = this.state.droppedChildren || [];
    children.push(this.props.eventHandlers.getComponent(id));
    this.setState({
      droppedChildren: children,
    });
  }

  handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  render() {
    const { ChildComponent } = this.props;
    return (<div onDrop={this.handleDrop} onDragOver={this.handleDragOver} aria-dropeffect="move">
      <ChildComponent {...this.props} droppedChildren={this.state.droppedChildren} />
    </div>);
  }
}

export default (props) => (<Consumer>
  {(handlers) => <Droppable {...props} eventHandlers={handlers}/>}
</Consumer>);