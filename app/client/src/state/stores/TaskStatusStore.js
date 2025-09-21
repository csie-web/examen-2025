import EventEmitter from '../../utils/EventEmitter'
import { SERVER } from '../../config/global'

class TaskStatusStore {
  constructor () {
    this.data = []
    this.count = 0
    this.emitter = new EventEmitter()
  }

  async getAll (state) {
    try {
      const response = await fetch(`${SERVER}/admin/task-statuses`, {
        headers: {
          authorization: state.user.data.token
        }
      })
      if (!response.ok) {
        throw response
      }
      const content = await response.json()
      this.data = content.data
      this.count = content.count
      this.emitter.emit('GET_TASK_STATUSES_SUCCESS')
    } catch (err) {
      console.warn(err)
      this.emitter.emit('GET_TASK_STATUSES_ERROR')
    }
  }

  async createOne (state, taskStatus) {
    try {
      const response = await fetch(`${SERVER}/admin/task-statuses`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          authorization: state.user.data.token
        },
        body: JSON.stringify(taskStatus)
      })
      if (!response.ok) {
        throw response
      }
      this.getAll(state)
    } catch (err) {
      console.warn(err)
      this.emitter.emit('ADD_TASK_STATUS_ERROR')
    }
  }

  async updateOne (state, id, taskStatus) {
    try {
      const response = await fetch(`${SERVER}/admin/task-statuses/${id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          authorization: state.user.data.token
        },
        body: JSON.stringify(taskStatus)
      })
      if (!response.ok) {
        throw response
      }
      this.getAll(state)
    } catch (err) {
      console.warn(err)
      this.emitter.emit('SAVE_TASK_STATUS_ERROR')
    }
  }

  async deleteOne (state, id) {
    try {
      const response = await fetch(`${SERVER}/admin/task-statuses/${id}`, {
        method: 'delete',
        headers: {
          authorization: state.user.data.token
        }
      })
      if (!response.ok) {
        throw response
      }
      this.getAll(state)
    } catch (err) {
      console.warn(err)
      this.emitter.emit('DELETE_TASK_STATUS_ERROR')
    }
  }
}

export default TaskStatusStore
