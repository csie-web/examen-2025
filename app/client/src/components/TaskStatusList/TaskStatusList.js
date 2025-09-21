import './TaskStatusList.css'
import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../state/AppContext'
import { useNavigate, useParams } from 'react-router-dom'
import TaskStatus from './TaskStatus'
import Paginator from '../Paginator/Paginator'

const TaskStatusList = () => {
  const globalState = useContext(AppContext)
  const [taskStatuses, setTaskStatuses] = useState([])
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    globalState.taskStatus.getAll(globalState)
    globalState.taskStatus.emitter.addListener('GET_TASK_STATUSES_SUCCESS', () => {
      setTaskStatuses(globalState.taskStatus.data)
    })
  }, [])

  return (
    <div className='task-status-list'>
      <h1>Task status list</h1>
      <table>
        <thead>
          <tr>
            <th>
           		Label
            </th>
            <th>
            	Enabled
            </th>
            <th>
           		Description
						</th>
          </tr>
        </thead>
        <tbody>
          {
            taskStatuses.map(taskStatus => <TaskStatus key={taskStatus.id} taskStatus={taskStatus} />)
          }
        </tbody>
      </table>
      <div className='footer'>
        <button onClick={() => navigate(`/task-statuses/new`)}>
          Create Task Status
        </button>
      </div>
    </div>
  )
}

export default TaskStatusList
