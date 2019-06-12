import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TodoHeader from './components/Header';
import TodoInput from './components/Input';
import TodoList from './components/TodoList';

import { connect } from 'react-redux';

import * as actions from './actions';

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

class App extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    const {
      visibleTodos,
      filter,
      addTodo,
      applyFilter,
      updateTodo,
      isFetching
    } = this.props;
    return (
      <Container>
        <TodoHeader title="Todo List" />
        <Row>
          <Col xs="12">
            <TodoInput onSubmit={addTodo} onFilter={applyFilter} />
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            {isFetching ? (
              'loading'
            ) : (
              <TodoList update={updateTodo} itemList={visibleTodos} />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  filter: state.filter,
  visibleTodos:
    state.todos.entries && getVisibleTodos(state.todos.entries, state.filter),
  isFetching: !state.todos.isFetched
}); //adaptador state component

export default connect(
  mapStateToProps,
  actions
)(App); //HOC, conectando redux con el componente (curry pattern)
