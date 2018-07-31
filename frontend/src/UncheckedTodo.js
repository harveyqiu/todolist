import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class UncheckedTodo extends Component {
  checkTodo(){
    let temp = this.state.todo
    temp.checked = temp.checked === false ? true : false
    this.setState(temp)
    this.updateTodo()
  }
  

  deleteTodo(event)  {
      this.props.onDelete()
  }

  contentOnChange(event) {
    let temp = this.state.todo
    temp.content = event.target.value
    this.setState(temp)
    this.updateTodo()
  }


  dateOnChange(event) {
    let temp= this.state.todo
    temp.expire_date = event.target.value
    this.setState(temp)
    this.updateTodo()
  }


  priorityOnChange(event) {
    let temp = this.state.todo
    temp.priority = event.target.value
    this.setState(temp)
    this.updateTodo()
  }

  onKeyPress(event) {
    if (event.which !== 13) return 
      console.log("空格")
      this.updateTodo()
  }


  updateTodo() {
     axios({
        method: 'PUT',
        url: 'http://localhost:8000/api/todos/' + this.state.todo.id,
        data: JSON.stringify({
          id: this.state.todo.id,
          content: this.state.todo.content,
          expire_date: this.state.todo.expire_date,
          priority: this.state.todo.priority,
          checked: this.state.todo.checked
        }),
        headers:{
          'Content-Type': 'application/json'
        }
    }) 
  }

  constructor(props) {
    super(props);
    this.state  = {
      todo: this.props.todo
    }
    this.contentOnChange = this.contentOnChange.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.dateOnChange = this.dateOnChange.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
    this.priorityOnChange = this.priorityOnChange.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
    this.checkTodo = this.checkTodo.bind(this)
  }

  render() {
    return (
      <li className={`${this.props.todo.checked === true ? "list-group-item checked" : "list-group-item"}`}>
        <div className="checkbox">
          <input type="checkbox" className="checkbox-item" onChange={this.checkTodo} checked={this.props.todo.checked}/>
        </div> 
        <div className="content">
          <input className="form-control" value={this.state.todo.content} onChange={this.contentOnChange} onKeyPress={this.updateContent}/>
        </div>

        <div className="expire_date">
          <input className="form-control" value={this.state.todo.expire_date} type="date" onChange={this.dateOnChange}/>
        </div>

        <div className="priority">
          <select className="form-control" value={this.state.todo.priority} onChange={this.priorityOnChange}>
            <option value="0">普通</option>
            <option value="1">紧急</option>
            <option value="2">非常紧急</option>
          </select>
        </div>
        
        <input type="image" src={require('./rubbish.png')} alt="delete" className="btn-delete" onClick={this.deleteTodo}/>
      </li>
    );
  }
}

export default UncheckedTodo;
