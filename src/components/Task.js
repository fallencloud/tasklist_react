import React, { Component, Fragment } from 'react';

class Task extends Component {
  state = {
    key: this.props.task.id,
    msg: this.props.task.msg
  };

  onClick = e => {
    e.preventDefault();
    this.props.deleteTask(this.state.key);
  };

  render() {
    const { key, msg } = this.state;

    return (
      <Fragment>
        <ul className="collection">
          <li className="collection-item" key={key.toString()}>
            {msg}
            <a
              href=""
              onClick={this.onClick}
              className="delete-item secondary-content"
            >
              <i className="fa fa-remove"></i>
            </a>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default Task;
