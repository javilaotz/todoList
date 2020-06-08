import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TodoHeader from './components/HeaderComponent';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <Container>
      <TodoHeader title="Todo List" />
      <Row>
        <Col xs="12">
          <TodoInput />
        </Col>
      </Row>
      <Row>
        <Col xs="4">
          <TodoList />
        </Col>
      </Row>
    </Container>
  );
}
