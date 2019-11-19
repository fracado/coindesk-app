import React, { Component } from 'react';

export default class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.keyname}</td>
        <td>{this.props.value} €</td>
      </tr>
    );
  }
}
