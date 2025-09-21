import models from '../../models/index.mjs'
import { Op } from 'sequelize'

const getAllTaskStatuses = async (req, res, next) => {
  try {
    const query = {}
    const filterQuery = {}
    const count = await models.TaskStatus.count({
      ...filterQuery
    })
    const data = await models.TaskStatus.findAll({
      ...query
    })
    res.status(200).json({ data, count })
  } catch (err) {
    next(err)
  }
}

const getOneTaskStatus = async (req, res, next) => {
  try {
    const taskStatus = await models.TaskStatus.findByPk(req.params.tsid)
    if (taskStatus) {
      res.status(200).json(taskStatus)
    } else {
      res.status(404).json({ message: 'Task status not found' })
    }
  } catch (err) {
    next(err)
  }
}

const createTaskStatus = async (req, res, next) => {
	try {
		const taskStatus = await models.TaskStatus.create(req.body)
		res.status(201).json(taskStatus)
	} catch (err) {
		next(err)
	}
}

const updateTaskStatus = async (req, res, next) => {
	try {
		const taskStatus = await models.TaskStatus.findByPk(req.params.tsid)
		if (taskStatus) {
			await taskStatus.update(req.body)
			res.status(200).json(taskStatus)
		} else {
			res.status(404).json({ message: 'Task status not found' })
		}
	} catch (err) {
		next(err)
	}
}

const deleteTaskStatus = async (req, res, next) => {
	try {
		const taskStatus = await models.TaskStatus.findByPk(req.params.tsid)
		if (taskStatus) {
			await taskStatus.update({ enabled: false })
			res.status(204).end()
		} else {
			res.status(404).json({ message: 'Task status not found' })
		}
	} catch (err) {
		next(err)
	}
}


export default {
  getAllTaskStatuses,
  getOneTaskStatus,
  createTaskStatus,
  updateTaskStatus,
  deleteTaskStatus
}
