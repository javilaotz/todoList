import React, { Component } from 'react'
import { ListGroupItem, Button } from 'reactstrap'
import './css/todoItem.css'

export default class TodoItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             itemList : this.props.itemList,
             class: ''
        }
    }

    handleClick(id){
        this.props.update(id)
        
    }

    handleClass(done){
        if (done) {
            return "done"
        }
    }
    
    render() {
        let itemList = this.state.itemList.map((item) => {
            let button = <Button onClick={()=>this.handleClick(item.id)}> done </Button>
            let element = <ListGroupItem className={this.handleClass(item.done)} disabled={item.done} key={item.id}>{button}{item.desc}</ListGroupItem>
            return element
        })
        return itemList
    }
}
