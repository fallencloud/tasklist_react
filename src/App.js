import React, { Component, Fragment } from 'react';
import Tasks from './components/Tasks';

class App extends Component {
  state = {
    items: []
  };

  addTask = task => {
    this.setState({
      items: [...this.state.items, { id: this.state.items.length, msg: task }]
    });
  };

  clearTasks = () => {
    this.setState({
      items: []
    });
  };

  render() {
    return (
      <Fragment>
        <Tasks
          title="Task List"
          items={this.state.items}
          addTask={this.addTask}
          clearTasks={this.clearTasks}
        />
      </Fragment>
    );
  }
}

export default App;
