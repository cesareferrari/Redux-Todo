const initialState = {
  todos: [
    { value: 'Walk the dog', completed: false },
    { value: 'Buy milk', completed: false },
    { value: 'Write book', completed: true }
  ]
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, {value: action.payload, completed: false}]
      }

    default:
      return state;
  }
}
