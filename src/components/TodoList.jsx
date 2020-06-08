import React, { Component } from 'react';
import { ListGroup } from 'reactstrap';

import { connect } from 'react-redux';
import { updateTodo, fetchTodos } from '../actions';

import TodoItem from './TodoItem';

const getVisibleTodos = (todos, filter) =>
  todos.filter(todo => {
    switch (filter) {
      case 'completed':
        return todo.done;

      case 'uncompleted':
        return !todo.done;

      default:
        return true;
    }
  });

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    let itemList = this.props.itemList;

    return this.props.isFetching ? (
      'Loading...'
    ) : (
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

const mapStateToProps = state => ({
  itemList:
    state.todos.entries && getVisibleTodos(state.todos.entries, state.filter),
  isFetching: !state.todos.isFetched
}); //adaptador state component

export default connect(
  mapStateToProps,
  { update: updateTodo, fetchTodos }
)(TodoList); //HOC, conectando redux con el componente (curry pattern)
