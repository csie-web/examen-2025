import './CommentList.css'
import React, { use, useContext, useEffect, useState } from 'react'
import AppContext from '../../state/AppContext'
import { useNavigate, useParams } from 'react-router-dom'
import Comment from './Comment'
import Paginator from '../Paginator/Paginator'

const CommentList = () => {
  const globalState = useContext(AppContext)
  const [comments, setComments] = useState([])
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    globalState.comment.getAll(globalState, params.pid, params.tid)
    globalState.comment.emitter.addListener('GET_COMMENTS_SUCCESS', () => {
      setComments(globalState.comment.data)
    })
  }, [params.pid, params.tid])

  return (
    <div className='comment-list'>
      <h1>Comment list</h1>
      <table>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {
            comments.map(comment => <Comment key={comment.id} comment={comment} />)
          }
        </tbody>
      </table>
      <div className='footer'>
        <button onClick={() => navigate(`/projects/${params.pid}/tasks/${params.tid}/comments/new`)}>
          Create Comment
        </button>
      </div>
    </div>
  )
}

export default CommentList
