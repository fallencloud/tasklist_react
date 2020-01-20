import React, { Component, Fragment } from 'react';
import Tasks from './components/Tasks';

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        msg: 'Play hooky'
      }
    ]
  };

  render() {
    return (
      <Fragment>
        <Tasks title="Task List" items={this.state.items} />
      </Fragment>
    );
  }
}

export default App;
