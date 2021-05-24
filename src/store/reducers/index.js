import { ADD_TODO, TOGGLE_COMPLETED, RESET } from "../actions/types";

const initialState = {
  list: []
};

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, payload]
      };
    case TOGGLE_COMPLETED:
      return {
        ...state,
        list: state.list.map((todo) => {
          if (todo.id === payload.id) {
            todo.completed = !payload.completed;
          }

          return todo;
        })
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
}
