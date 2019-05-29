import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

import TodoItem from './todoItem'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             itemList : this.props.itemList
        }
    }

    update(id){
       this.props.update(id)
    }
    
    render() {
        console.log(this.state.itemList)
        return (
        <ListGroup>
            <TodoItem update={this.update.bind(this)} itemList={this.state.itemList} />
        </ListGroup>
        )
    }
}
