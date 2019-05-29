import React, { Component } from 'react'
import { ListGroupItem, Button } from 'reactstrap'
import './css/todoItem.css'
import { MdBookmark } from "react-icons/md";

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

    handleClass(item){
        if (item.done) { 
            return ' done '
        }
    }
    
    render() {
        let itemList = this.state.itemList.map((item) => {
            let element = item.display? <ListGroupItem onClick={()=>this.handleClick(item.id)} className={this.handleClass(item)} disabled={item.done} key={item.id}><MdBookmark/>  {item.desc}</ListGroupItem> : null
            return element
        })
        return itemList
    }
}
