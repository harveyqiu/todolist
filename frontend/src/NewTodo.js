import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class NewTodo extends Component {
  keyPress(e) {
    if (e.which !== 13) return
      console.log('你按了回车键...')
      axios.post('')
      .then(function ( ) {

      });
  }
  render() {
    return (
      <div className="add">
        <input className="form-control" placeholder="New Todo" onKeyPress={this.keyPress}/>
      </div>
    );
  }
}

export default NewTodo;
