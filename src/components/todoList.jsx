import React, { Component } from 'react';
import { ListGroup } from 'reactstrap';

import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    let itemList = this.props.itemList;

    return (
      <ListGroup>
        {itemList.map(item => (
          <TodoItem
            update={() => {
              this.props.update(item.id);
            }}
            item={item}
            key={item.id}
          />
        ))}
      </ListGroup>
    );
  }
}
