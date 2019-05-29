import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import TodoHeader from "./components/header";
import TodoInput from "./components/input";
import TodoList from "./components/todoList";

export default class App extends Component  {
  constructor(props) {
    super(props)
  
    this.state = {
       itemList : []
    }
  }

  onSubmit(item){
    this.setState(state => {
      return state.itemList.push(item);
    });
  }

  update(id){
    let itemList = this.state.itemList;
    itemList.forEach(item => {
      if (item.id === id) {
        item.done = true
      }
    });

    this.setState({itemList: itemList})
  }

  filterList(opc){
    switch (opc) {
      case "completed":
          alert("looking for completed");
          break;
      
      case "uncompleted":
          alert("looking for uncompleted");
          break;
  
      default:
          break;
    }
  }
  
  render(){
    return (
      <Container>
        <TodoHeader />
          <Row>
            <Col xs="8">
              <TodoInput onSubmit={this.onSubmit.bind(this)} onFilter={this.filterList}/>
            </Col>
          </Row>
          <Row>
            <Col xs="8">
              <TodoList update={this.update.bind(this)} itemList={this.state.itemList}/>
            </Col>
          </Row>
      </Container>
    )}
}