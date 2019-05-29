import React, { Component } from 'react'
import { ListGroupItem, Button } from 'reactstrap'

export default class TodoItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             itemList : this.props.itemList
        }
    }

    handleClick(id){
        this.props.update(id)
    }
    
    render() {
        let itemList = this.state.itemList.map((item) => {
            let button = <Button onClick={this.handleClick(item.id)}> done </Button>
            let element = <ListGroupItem key={item.id}>{button}{item.desc}</ListGroupItem>
            return element
        })
        return itemList
    }
}
