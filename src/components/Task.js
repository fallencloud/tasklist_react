import React, { Fragment } from 'react';

const Task = ({ task }) => {
  return (
    <Fragment>
      <ul className="collection">
        <li className="collection-item">
          {task.msg}
          <a href="" className="delete-item secondary-content">
            <i className="fa fa-remove"></i>
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default Task;
