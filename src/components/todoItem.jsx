import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';
import './css/todoItem.css';
import { MdBookmark } from 'react-icons/md';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: ''
    };
  }

  handleClass(item) {
    if (item.done) {
      return 'done';
    } else {
      return '';
    }
  }

  render() {
    return (
      <ListGroupItem
        onClick={this.props.update}
        className={this.handleClass(this.props.item)}
        key={this.props.item.id}
      >
        <MdBookmark /> <span>{this.props.item.desc}</span>
      </ListGroupItem>
    );
  }
}
