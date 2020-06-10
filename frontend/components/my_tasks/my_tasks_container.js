import React from 'react'
import { connect } from 'react-redux'
import MyTasks from './my_tasks'
import {getTasks, deleteTask} from '../../actions/tasks_actions'

const mapStateToProps = state => ({
    tasks: state.entities.tasks,
    completedTasks: Object.values(state.entities.tasks).filter(task => task.completed),
    currentTasks: Object.values(state.entities.tasks).filter(task => !task.completed),
    currentUser: state.session.currentUser,
    users: state.entities.users,
    taskTypes: state.entities.taskTypes
})

const mapDispatchToProps = dispatch => ({
    getTasks: (userId) => dispatch(getTasks(userId)),
    deleteTask: (taskId) => dispatch(deleteTask(taskId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyTasks)