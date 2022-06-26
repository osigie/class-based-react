import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="col-12">
          <h2 className="bg-primary text-white text-center p2">
            {this.props.name} To do list
          </h2>
        </div>
      </div>
    );
  }
}
