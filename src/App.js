import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Zander",
      todoItems: [
        { id: 1, action: "Buy Milk", done: true },
        { id: 2, action: "Dentist at 5pm", done: false },
        { id: 3, action: "Go to Gym", done: false },
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

  toggleDone = (data) => {
    this.setState({
      ...this.state,
      todoItems: this.state.todoItems.map((todo) => {
        if (todo.id === data) {
          todo = { ...todo, done: !todo.done };
        }

        return todo;
      }),
    });
  };

  todoRows() {
    return this.state.todoItems.map((todo) => {
      return (
        <tr key={todo.action}>
          <td>{todo.action}</td>
          <td>
            <input
              type="checkbox"
              name="done"
              checked={todo.done}
              onChange={() => this.toggleDone(todo.id)}
            />
          </td>
        </tr>
      );
    });
  }

  addTodo() {
    const id = this.state.todoItems.length + 1;
    this.setState({
      ...this.state,
      todoItems: [
        ...this.state.todoItems,
        { id, action: this.state.newTodo, done: false },
      ],
    });
    // this.setState({...this.state, newTodo:""})
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
              onChange={(event) =>
                this.setState({ ...this.state, newTodo: event.target.value })
              }
            />
            <button
              className="btn btn-primary"
              onClick={this.addTodo.bind(this)}
            >
              Add Todo
            </button>
          </div>
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>{this.todoRows.bind(this)()}</tbody>

              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
}
