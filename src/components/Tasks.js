import React, { Component } from 'react';
import Task from './Task';

class Tasks extends Component {
  static defaultProps = {
    title: 'Task List'
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div id="main" className="card">
              <div className="card-content">
                <span className="card-title">{this.props.title}</span>
                <div className="row">
                  <form id="task-form">
                    <div className="input-field col s12">
                      <input type="text" name="task" id="task" />
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
                <Task />
                <a href="#" class="clear-tasks btn black">
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
