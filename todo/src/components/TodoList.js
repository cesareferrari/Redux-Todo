import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
  state = {
    newTodo: ''
  }

  handleChanges = e => { 
    this.setState({[e.target.name]: e.target.value });
  }

  render() {
    return(
      <div>
        <h2>Todo list</h2>

        {this.props.todos.map((todo, index) => {
          return(
            <div>
              {todo.value} - 
              {todo.completed ? "Completed" : "Not completed"}
            </div>
          )
        })}

        <br />

      <input
        type="text"
        name="newTodo"
        value={this.state.newTodo}
        placeholder="Add new Todo"
        onChange={this.handleChanges}
      />

      <button>Add Todo</button>



      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {})(TodoList);
