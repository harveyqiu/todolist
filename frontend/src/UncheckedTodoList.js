import React, { Component } from 'react';
import './App.css';
import UncheckedTodo from './UncheckedTodo';
import axios from 'axios'
class UncheckedTodoList extends Component {
  componentDidMount() {
    axios.post()
    .then()
    .catch()
  }
  
  render() {
    return (
      <ul className="list-group">
        <UncheckedTodo />
      </ul>

      
    );
  }
}

export default UncheckedTodoList;
