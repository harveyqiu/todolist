import React, {
  Component
} from 'react';
import './App.css';
import UncheckedTodo from './UncheckedTodo';
import axios from 'axios'
class UncheckedTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.getAll = this.getAll.bind(this)
    this.getListOrderByExpireDate = this.getListOrderByExpireDate.bind(this)
    this.getListOrderByPriority = this.getListOrderByPriority.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }


  getAll() {
    axios.get('http://localhost:8000/api/todos/')
    .then(function (response) {
      this.setState({todos: response.data})
    }.bind(this))
  }

  getListOrderByExpireDate() {
    axios.get('http://localhost:8000/api/todos/order_by_expire_date/')
    .then(function (response) {
      this.setState({todos: response.data})
    }.bind(this))
  }

  getListOrderByPriority() {
    axios.get("http://localhost:8000/api/todos/order_by_priority/")
    .then(function (response) {
      this.setState({todos: response.data})
    }.bind(this))
  }


  deleteTodo(id) {
    axios({
      method: 'DELETE',
      url: 'http://localhost:8000/api/todos/' + id,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let todos = []
    this.state.todos.forEach(todo => {
      if (todo.id !== id) {
        todos.push(todo)
      }
    });
    this.setState({todos})
  }

  componentDidMount() {
    this.getAll()
  }

  render() {
    return ( 
      <div>
            <ul className = "list-group">
              {
                this.state.todos.map((todo)=> (
                  <UncheckedTodo todo={todo} key={todo.id} onDelete={() => this.deleteTodo(todo.id)}/>
                ))
              }
            </ul>
            
            <div className="btn-group" role="group" aria-label="Order">
              <button type="button" className="btn btn-secondary" onClick={this.getAll}>All</button>
              <button type="button" className="btn btn-secondary" onClick={this.getListOrderByExpireDate}>Order by Expire Date</button>
              <button type="button" className="btn btn-secondary" onClick={this.getListOrderByPriority}>Order by Priority</button>
            </div>
      </div>

    
    );
  }
}

export default UncheckedTodoList;