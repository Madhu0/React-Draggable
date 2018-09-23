import React, { Component } from 'react';
import './index.scss'


export default class Test extends Component {
  render() {
    const { droppedChildren = [] } = this.props;
    return (<div  className="container-droppable">
      {droppedChildren}
    </div>);
  }
}