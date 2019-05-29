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

    handleSubmit = () => {
        this.props.onSubmit({
            id: shortid.generate(),
            desc: this.state.todoItem,
            done: false
        })

        this.setState({todoItem: ''})
    }
    
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Input type="text" name="todoItem" value={this.state.todoItem} onChange={this.handleChange} placeholder="Type a task and press Save"/>
                    </Col>
                    <Col>
                        <Button color="primary" onClick={this.handleSubmit}>Save</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
