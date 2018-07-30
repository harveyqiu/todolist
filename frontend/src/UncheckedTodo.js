import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class UncheckedTodo extends Component {
  onDoubleClick(event) {
    
  }
  
  onChange(event) {
    axios({
      method: 'post',
      url: '',
      data: {

      }
    })
  }

  constructor(props) {
    super(props);
    this.state  = {
      disabled: true
    }
    this.onChange = this.onChange.bind(this)
  }

  render() {
    return (
      <li className="list-group-item">
        <input type="checkbox" />
        <input className="form-control" disabled={this.state.disabled} value={this.props.todo.content} onDoubleClick={this.onDoubleClick}/>
        <button className="btn btn-primary">删除</button>
      </li>
    );
  }
}

export default UncheckedTodo;
