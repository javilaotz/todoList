import React, { Component } from 'react'
import {Input, Button, Row, Col} from 'reactstrap';
import shortid from 'shortid'

export default class TodoInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todoItem: ''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.todoItem.length > 0) {
            this.props.onSubmit({
                id: shortid.generate(),
                desc: this.state.todoItem,
                done: false
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
                        <Button color="primary" onClick={this.handleSubmit} type="submit">Save</Button>
                    </Col>
                    <Col>
                        <Button color="info" onClick={()=>this.handleFilter("completed")}>Terminados</Button>
                    </Col>
                    <Col>
                        <Button color="info" onClick={()=>this.handleFilter("uncompleted")}>Pendientes</Button>
                    </Col>
                </Row>
            </form>
        )
    }
}
