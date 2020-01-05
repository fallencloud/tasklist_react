import React, { Component, Fragment } from 'react';
import Tasks from './components/Tasks';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Tasks title="Task List" />
      </Fragment>
    );
  }
}

export default App;
