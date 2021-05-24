import { ADD_TODO, TOGGLE_COMPLETED, RESET } from './types'

export const addTodo = todo => ({
    type: ADD_TODO,
    payload: todo
})

export const toggleCompleted = id => ({
    type: TOGGLE_COMPLETED,
    payload: id
})

export const reset = () => ({
    type: RESET
})