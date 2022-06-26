import React, { Component } from "react";

export default class TodoRows extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.action}</td>
        <td>
          <input
            type="checkbox"
            name="done"
            checked={this.props.done}
            onChange={() => this.props.toggleDone(this.props.id)}
          />
        </td>
      </tr>
    );
  }
}
