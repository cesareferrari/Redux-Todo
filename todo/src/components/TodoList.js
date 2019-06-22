import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
  render() {
    return(
      <div>
        <h2>Todo list</h2>

        {this.props.todos.map(todo => todo.value)}
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
