import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Draggable from '../src/components/draggable';
import Droppable from '../src/components/droppable';
import Wrapper, { Consumer } from '../src/components/wrapper';
import Test1 from './test1';
import DroppableTest1 from './droppableTest1';

class TestApp extends Component {
  render() {
    return (<div>
      <p>Hello</p>
      <Draggable>
        <p>You can drag me now1</p>
      </Draggable>
      <Draggable>
        <Test1 />
      </Draggable>
      <Droppable ChildComponent={DroppableTest1} />
    </div>);
  }
}

const WrappedApp = Wrapper(TestApp);

const body = document.getElementsByTagName('body')[0];
const div = document.createElement('div');
div.id = 'my-test-app-root';
body.appendChild(div);

ReactDOM.render(<WrappedApp />, document.getElementById('my-test-app-root'));
