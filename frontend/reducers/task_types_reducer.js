import { RECEIVE_TASK_TYPE, RECEIVE_TASK_TYPES } from '../actions/task_types_actions'

export default (initialState = {}, action) => {
    Object.freeze(initialState)
    switch (action.type) {
        case RECEIVE_TASK_TYPE:
            return Object.assign({}, initialState, { [action.taskType.id]: action.taskType })
        case RECEIVE_TASK_TYPES:
            return Object.assign({}, initialState, action.taskTypes)
        default:
            return initialState;
    }
}