import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css';
import NewTodo from './NewTodo';
import UncheckedTodoList from './UncheckedTodoList';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: {
        count: 1,
        page: 1
      }
    }
    this.pagination = this.pagination.bind(this)
    this.alterPage = this.alterPage.bind(this)
  }

  pagination() {
    let pagination = []
    for(let i=1;i<=this.state.page.count;i++) {
      pagination.push(<li className="page-item" key={i}><a className="page-link" onClick={this.alterPage(i)}>{i}</a></li>)
    }
    return pagination
  }
  
  alterPage(pageNum) {
    let state = this.state.page
    state.page = pageNum
    this.setState({state})
  }

  render() {
    return (
      <div className="container">
        <h1 className="title text-center">Todo List</h1>
        <NewTodo/>
        <UncheckedTodoList page={this.state.page.page}/>
        <nav className="container page">
              <ul className="pagination pagination-lg">
                <this.pagination/>
              </ul>
        </nav>
      </div>
    );
  }

  componentDidMount() {
    axios.get("http://localhost:8000/api/page/")
    .then(function (response) {
      let page = this.state.page
      page.count = response.data.num_pages
      this.setState({page})
    }.bind(this))
  }
}

export default App;
