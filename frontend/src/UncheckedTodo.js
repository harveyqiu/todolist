import React, { Component } from 'react';
import './App.css';

class UncheckedTodo extends Component {
  render() {
    return (
      <li className="list-group-item">
        <input type="checkbox" />
        <input className="form-control" disabled/>
      </li>
    );
  }
}

export default UncheckedTodo;
