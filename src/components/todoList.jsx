import React, { Component } from 'react';
import { ListGroup } from 'reactstrap';

import TodoItem from './todoItem';

export default class TodoList extends Component {
  update(id) {
    this.props.update(id);
  }

  render() {
    return (
      <ListGroup>
        <TodoItem
          update={this.update.bind(this)}
          itemList={this.props.itemList}
          filter={this.props.filter}
        />
      </ListGroup>
    );
  }
}
