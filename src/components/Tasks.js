import React, { Component } from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

class Tasks extends Component {
  state = {
    task: ''
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.task) {
      this.props.addTask(this.state.task);
      this.setState({
        task: ''
      });
    }
  };

  onClick = e => {
    this.props.clearTasks();
  };
  render() {
    const { title, items } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div id="main" className="card">
              <div className="card-content">
                <span className="card-title">{title}</span>
                <div className="row">
                  <form id="task-form" onSubmit={this.onSubmit}>
                    <div className="input-field col s12">
                      <input
                        type="text"
                        name="task"
                        id="task"
                        value={this.state.text}
                        onChange={this.onChange}
                      />
                      <label htmlFor="task">New Task</label>
                    </div>
                    <input type="submit" value="Add Task" className="btn" />
                  </form>
                </div>
              </div>
              <div className="card-action">
                <h5 id="task-title">Tasks</h5>
                <div className="input-field col s12">
                  <input type="text" name="filter" id="filter" />
                  <label htmlFor="filter">Filter Tasks</label>
                </div>
                {items.map(task => (
                  <Task key={task.id.toString()} task={task} />
                ))}
                <a
                  href="#"
                  class="clear-tasks btn black"
                  onClick={this.onClick}
                >
                  Clear Tasks
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
