import React, { Component } from 'react'

export default class DummyPage extends Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}
