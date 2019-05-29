import React, { Component } from 'react'
import {Input, Button, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import shortid from 'shortid'
import { MdSave, MdRemoveRedEye } from "react-icons/md";

export default class TodoInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todoItem: '',
             dropdownOpen: false
        }
    }

    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.todoItem.length > 0 && this.state.todoItem.replace(/\s/g, '').length) {
            this.props.onSubmit({
                id: shortid.generate(),
                desc: this.state.todoItem,
                done: false,
                display: true
            })
        }else{
            alert ("I'm pretty sure you are forgetting to write the task")
        }
        
        this.setState({todoItem: ''})
    }

    handleFilter(opc){
        this.props.onFilter(opc)
    }
    
    render() {
        return (
            <form>
                <Row>
                    <Col xs = "6">
                        <Input type="text" name="todoItem" value={this.state.todoItem} onChange={this.handleChange} placeholder="Type a task and press Save"/>
                    </Col>
                    <Col>
                        <Button color="primary" onClick={this.handleSubmit} type="submit"><MdSave/></Button>
                    </Col>
                    <Col>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle.bind(this)}>
                            <DropdownToggle caret>
                            Filter
                            </DropdownToggle>
                            <DropdownMenu>
                            <DropdownItem header>Filter</DropdownItem>
                            <DropdownItem onClick={()=>this.handleFilter("completed")}>Completed</DropdownItem>
                            <DropdownItem onClick={()=>this.handleFilter("uncompleted")}>Uncompleted</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={()=>this.handleFilter("all")}>Reset</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                </Row>
            </form>
        )
    }
}
