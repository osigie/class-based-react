import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Zander",
      todoItems: [
        { action: "Buy Milk", done: true },
        { action: "Dentist at 5pm", done: false },
        { action: "Go to Gym", done: false },
      ],
      newTodo: "",
    };
  }

  stateChange = () => {
    this.setState({
      ...this.state,
      userName: this.state.userName === "Name1" ? "Name2" : "Name1",
    });
  };

  todoRows() {
    return this.state.todoItems.map((todo) => {
      return (
        <tr key={todo.action}>
          <td>{todo.action}</td>
        </tr>
      );
    });
  }

  render = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="bg-primary text-white text-center p2">
              {this.state.userName} To do list
            </h2>
          </div>
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="add todo"
              value={this.state.newTodo}
            />
          </div>
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Task</th>
                </tr>
              </thead>
              <tbody>{this.todoRows()}</tbody>

              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
}
