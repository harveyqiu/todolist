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
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/todo/list/')
      .then(function (response) {
        this.setState({todos: response.data})
      }.bind(this))
      .catch()
      
  }

  

  render() {
    return ( 
      <ul className = "list-group" >
        {
          this.state.todos.map((todo)=> (
            <UncheckedTodo todo={todo} key={todo.id}/>
          ))
        }
      </ul>


    );
  }
}

export default UncheckedTodoList;