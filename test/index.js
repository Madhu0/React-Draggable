import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Draggable from './../src/components/draggable';
import Droppable from './../src/components/droppable';
import Wrapper, { Consumer } from '../src/components/wrapper';
import Test1 from './test1';
import DroppableTest1 from './droppableTest1';

const dragImageLink = "https://png.icons8.com/ios/100/flamingo.png";

const TempComp = () => (<div>Abc</div>);

class TestApp extends Component {
  render() {
    return (<div>
      <p>Hello</p>
      <Draggable dragComponent={<div style={{ height: '30px', width: '30px', 'background': 'black', color: 'yellow' }}>Abc</div>}>
        <div style={{ height: '30px', width: '300px', 'background': 'red', color: 'black' }}>
          <p>You can drag me now</p>
        </div>
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
