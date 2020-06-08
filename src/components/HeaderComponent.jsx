import React, { Component } from 'react';

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}
