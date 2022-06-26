import React, { Component } from "react";
import Navbar from "./components/Navbar";
import TodoRows from "./components/TodoRows";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Osagie",
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
      return <TodoRows key={todo.id} toggleDone={this.toggleDone} {...todo} />;
    });
  }

  addTodo() {
    if (this.state.newTodo.length <= 0) {
      alert("Please input new Todo");
      return;
    }
    const id = this.state.todoItems.length + 1;
    this.setState({
      ...this.state,
      todoItems: [
        ...this.state.todoItems,
        { id, action: this.state.newTodo, done: false },
      ],
    });
    this.setState({ newTodo: "" });
  }

  render = () => {
    return (
      <div className="container">
        <div className="row">
          <Navbar name={this.state.userName} />
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
