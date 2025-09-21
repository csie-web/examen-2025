import React, { useState, useContext, useEffect } from 'react'
import AppContext from '../../state/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const TaskStatusForm = () => {
  const [label, setLabel] = useState('')
  const [description, setDescription] = useState('')
  const globalState = useContext(AppContext)
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    globalState.taskStatus.emitter.removeAllListeners('GET_TASK_STATUSES_SUCCESS')
    globalState.taskStatus.emitter.addListener('GET_TASK_STATUSES_SUCCESS', () => {
      navigate(`/task-statuses`)
    })
  }, [])

  return (
    <div>
      <h1>Task Status Form</h1>
      <input
        type='text'
        placeholder='label'
        value={label}
        onChange={e => setLabel(e.target.value)}
      />
      <input
        type='text'
        placeholder='text'
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button onClick={() => {
        globalState.taskStatus.createOne(globalState, { label, description })
      }}
      >
        Create
      </button>
    </div>
  )
}

export default TaskStatusForm
