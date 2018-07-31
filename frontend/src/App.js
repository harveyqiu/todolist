import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css';
import NewTodo from './NewTodo';
import UncheckedTodoList from './UncheckedTodoList';
import axios from 'axios'

class App extends Component {
  getPage() {
    axios.get('http://localhost:8000/api/todo/')
      .then(function (response) {

      })
  }

  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      nowPage: 1
    }
    this.pagination = this.pagination.bind(this)
    this.alterPage = this.alterPage.bind(this)
  }

  pagination() {
    let pagination = []
    for(let i=1;i<=this.state.count;i++) {
      pagination.push(<li className="page-item" key={i}><a className="page-link" onClick={this.alterPage}>{i}</a></li>)
    }
    return pagination
  }

  alterPage(pageNum) {
    axios.get("http://localhost:8000/api/page/")
    .then(function (response) {
      let state = this.state
      state.count = response.data.num_pages
      this.setState(state)
    }.bind(this))
  }

  render() {
    return (
      <div className="container">
        <h1 className="title text-center">Todo List</h1>
        <NewTodo/>
        <UncheckedTodoList page={this.state.nowPage}/>
        <nav className="container page">
              <ul className="pagination pagination-lg">
                <this.pagination/>
              </ul>
        </nav>
      </div>
    );
  }
}

export default App;
