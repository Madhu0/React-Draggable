import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Draggable from '../src/components/draggable';
import Droppable from '../src/components/droppable';

class TestApp extends Component {
  render() {
    return (<div>
      <p>Hello</p>
      <Draggable>
        <p>You can drag me now</p>
      </Draggable>
      <Droppable />
    </div>);
  }
}

const body = document.getElementsByTagName('body')[0];
const div = document.createElement('div');
div.id = 'my-test-app-root';
body.appendChild(div);

ReactDOM.render(<TestApp />, document.getElementById('my-test-app-root'));
