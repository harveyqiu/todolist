import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class UncheckedTodo extends Component {
  checkTodo(event) {
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/todo/',
      data: JSON.stringify({
        id: this.props.todo.id
      }),
    })
  }
  
  deleteTodo(event)  {
      axios({
        method: 'DELETE',
        url: 'http://localhost:8000/api/todo/',
        data: JSON.stringify({
          id: this.props.todo.id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
  }

  onChange(event) {
    axios({
      method: 'post',
      url: '',
      data: {
          content: this.props.todo.content
      }
    })
  }

  constructor(props) {
    super(props);
    this.state  = {
      disabled: true
    }
    this.onChange = this.onChange.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  render() {
    return (
      <li className={`${this.props.todo.checked === true ? "list-group-item checked" : "list-group-item"}`}>
        <div className="checkbox">
          <input type="checkbox" className="checkbox-item" onChange={this.checkTodo} checked={this.props.todo.checked}/>
        </div> 
        <input className="form-control" value={this.props.todo.content}/>
        <input type="image" src={require('./rubbish.png')} alt="" className="btn-delete" onClick={this.deleteTodo}/>
      </li>
    );
  }
}

export default UncheckedTodo;
