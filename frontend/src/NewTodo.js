import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class NewTodo extends Component {


  constructor(props) {
    super(props);
    this.state = { 
      todo: {
        content: '233',
        expire_date: '',
        priority: '',
      }
    }
    this.keyPress = this.keyPress.bind(this)
  }

  keyPress(event) {
    if (event.which !== 13) return
      console.log('你按了回车键...')
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/todo/',
        data: JSON.stringify({
          content: this.state.todo.content,
          expire_date: '2017-7-6',
          priority: 0,
          checked: 'false'
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
  }


  onChange(event) {
    this.setState({todo:{
      content: event.target.value
    }})
  }

  render() {
    return (
      <div className="add">
        <input className="form-control" placeholder="New Todo" onKeyPress={this.keyPress} onChange={this.onChange}/>
      </div>
    );
  }
}

export default NewTodo;
