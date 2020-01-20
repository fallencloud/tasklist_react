import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

const Tasks = ({ title, items }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div id="main" className="card">
            <div className="card-content">
              <span className="card-title">{title}</span>
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
              {items.map(task => (
                <Task task={task} />
              ))}
              <a href="#" class="clear-tasks btn black">
                Clear Tasks
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Tasks.propTypes = {
  items: PropTypes.array.isRequired
};

export default Tasks;
