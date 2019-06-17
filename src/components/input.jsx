import React, { Component } from 'react';
import { Input, Button, Row, Col } from 'reactstrap';
import { MdSave } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

import { connect } from 'react-redux';
import { applyFilter, addTodo } from '../actions';

import shortid from 'shortid';
import TodoFilter from './TodoFilter';

import './css/input.css';

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItem: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      this.state.todoItem.length > 0 &&
      this.state.todoItem.replace(/\s/g, '').length
    ) {
      this.props.onSubmit({
        id: shortid.generate(),
        desc: this.state.todoItem,
        done: false
      });
    } else {
      console.log("I'm pretty sure you are forgetting to write the task");
    }

    this.setState({ todoItem: '' });
  };

  render() {
    return (
      <form>
        <Row>
          <Col xs="6">
            <Input
              type="text"
              name="todoItem"
              value={this.state.todoItem}
              onChange={this.handleChange}
              placeholder="Type a task and press Save"
            />
          </Col>
          <Col>
            <Button color="primary" onClick={this.handleSubmit} type="submit">
              <MdSave />
            </Button>
          </Col>
          <Col>
            <TodoFilter onFilter={this.props.onFilter} />
          </Col>
          <Col>
            <Button color="link">
              <FaGithub />
            </Button>
          </Col>
        </Row>
      </form>
    );
  }
}

const mapStateToProps = state => ({}); //adaptador state component

export default connect(
  mapStateToProps,
  { onFilter: applyFilter, onSubmit: addTodo }
)(TodoInput); //HOC, conectando redux con el componente (curry pattern)
