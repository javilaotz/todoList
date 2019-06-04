import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TodoHeader from './components/header';
import TodoInput from './components/input';
import TodoList from './components/todoList';

import { fetchTodos, addTodo, toggleTodo } from './components/api';

export default class App extends Component {
  state = {
    itemList: [],
    filter: 'all'
  };

  onSubmit = item => {
    addTodo(item).then(i => {
      let itemList = this.state.itemList;
      let newList = [...itemList, i];
      this.setState({ itemList: newList });
    });
  };

  componentDidMount = () => {
    fetchTodos().then(i => {
      this.setState({ itemList: i });
    });
  };

  update(id) {
    //encontrar elemento y reemplazarlo
    toggleTodo(id).then(i => {
      this.setState({ itemList: i });
    });
  }

  filterList(opc) {
    this.setState({ filter: opc });
  }

  render() {
    let visibleItemList = this.state.itemList.filter(item => {
      switch (this.state.filter) {
        case 'completed':
          return item.done;

        case 'uncompleted':
          return !item.done;

        default:
          return true;
      }
    });

    return (
      <Container>
        <TodoHeader />
        <Row>
          <Col xs="12">
            <TodoInput
              onSubmit={this.onSubmit}
              onFilter={this.filterList.bind(this)}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <TodoList
              update={this.update.bind(this)}
              itemList={visibleItemList}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
