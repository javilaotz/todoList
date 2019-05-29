import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
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
    let itemList = this.state.itemList;
    switch (opc) {
      case "completed":
          itemList.forEach(item => {
            if (item.done) {
              item.display = true
            }else{
              item.display = false
            }
          });
          this.setState({itemList: itemList})
          break;
      
      case "uncompleted":
          itemList.forEach(item => {
            if (item.done) {
              item.display = false
            }else{
              item.display = true
            }
          });
          this.setState({itemList: itemList})
          break;
      
      case "all":
          itemList.forEach(item => item.display = true);
          this.setState({itemList: itemList})
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
            <Col xs="12">
              <TodoInput onSubmit={this.onSubmit.bind(this)} onFilter={this.filterList.bind(this)}/>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <TodoList update={this.update.bind(this)} itemList={this.state.itemList}/>
            </Col>
          </Row>
      </Container>
    )}
}