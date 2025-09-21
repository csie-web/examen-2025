import React, { useState, useContext } from 'react'
import AppContext from '../../../state/AppContext'
import { useParams, useNavigate } from 'react-router-dom'

const TaskStatus = ({ taskStatus }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [label, setLabel] = useState(taskStatus.label)
  const [description, setDescription] = useState(taskStatus.description)
  const globalState = useContext(AppContext)
  const params = useParams()
  const navigate = useNavigate()

  return (
    <tr>
      {
        isEditing
          ? (
            <>
              <td>
                <input
                  type='text'
                  value={label}
                  onChange={e => setLabel(e.target.value)}
                />
              </td>
              <td>
              	{taskStatus.enabled ? 'Active' : 'Removed'}
              </td>
              <td>
	            	<input
	                type='text'
	                value={description}
	                onChange={e => setDescription(e.target.value)}
	              />
              </td>
              <td>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
                <button onClick={() => {
                  globalState.taskStatus.updateOne(globalState, taskStatus.id, {
                    label,
                    description
                  })
                  setIsEditing(false)
                }}>
                Save
                </button>
              </td>
            </>
            )
          : (
            <>
              <td>{taskStatus.label}</td>
              <td>
              	{taskStatus.enabled ? 'Active' : 'Removed'}
              </td>
              <td>
              	{taskStatus.description}
              </td>
              <td>
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={() => {
                  globalState.taskStatus.deleteOne(globalState, taskStatus.id)
                }}>
                	Delete
                </button>
              </td>
            </>
          )
      }

    </tr>
  )
}

export default TaskStatus
