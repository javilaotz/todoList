import React, { Component } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class TodoFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };
  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>Filter</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Filter</DropdownItem>
          <DropdownItem onClick={() => this.props.onFilter('completed')}>
            Completed
          </DropdownItem>
          <DropdownItem onClick={() => this.props.onFilter('uncompleted')}>
            Uncompleted
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => this.props.onFilter('all')}>
            Reset
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
