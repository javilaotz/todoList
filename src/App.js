import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TodoHeader from './components/Header';
import TodoInput from './components/Input';
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
