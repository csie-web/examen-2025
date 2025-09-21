import express from 'express'
import middleware from '../middleware/index.mjs'
import controllers from './controllers/index.mjs'

const adminRouter = express.Router()

adminRouter.use(middleware.auth)
adminRouter.use(middleware.getUserTypeMiddleware('admin'))

// user endpoints
adminRouter.get('/users', controllers.user.getUsers)
adminRouter.post('/users', controllers.user.createUser)
adminRouter.put('/users/:uid', controllers.user.updateUser)
adminRouter.delete('/users/:uid', controllers.user.deleteUser)

// task status endpoints
adminRouter.get('/task-statuses', controllers.taskStatus.getAllTaskStatuses)
adminRouter.get('/task-statuses/:tsid', controllers.taskStatus.getOneTaskStatus)
adminRouter.post('/task-statuses', controllers.taskStatus.createTaskStatus)
adminRouter.put('/task-statuses/:tsid', controllers.taskStatus.updateTaskStatus)
adminRouter.delete('/task-statuses/:tsid', controllers.taskStatus.deleteTaskStatus)

export default adminRouter
