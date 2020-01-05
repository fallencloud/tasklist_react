import React, { Component, Fragment } from 'react';

class Task extends Component {
  state = {
    item: 'Schmee'
  };
  render() {
    return (
      <Fragment>
        <ul className="collection">
          <li className="collection-item">
            {this.state.item}
            <a href="" className="delete-item secondary-content">
              <i className="fa fa-remove"></i>
            </a>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default Task;
