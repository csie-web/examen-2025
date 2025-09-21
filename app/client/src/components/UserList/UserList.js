import './UserList.css'
import React, { use, useContext, useEffect, useState } from 'react'
import AppContext from '../../state/AppContext'
import { useNavigate, useParams } from 'react-router-dom'
import User from './User'
import Paginator from '../Paginator/Paginator'

const UserList = () => {
  const globalState = useContext(AppContext)
  const [users, setUsers] = useState([])
  const [pageNumber, setPageNumber] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [filterField, setFilterField] = useState('')
  const [filterValue, setFilterValue] = useState('')
  const [sortField, setSortField] = useState('')
  const [sortOrder, setSortOrder] = useState('')
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    globalState.userAdmin.getAll(globalState, pageNumber, pageSize, filterField, filterValue, sortField, sortOrder)
    globalState.userAdmin.emitter.addListener('GET_USERS_SUCCESS', () => {
      setUsers(globalState.userAdmin.data)
    })
  }, [ pageNumber, pageSize, filterField, filterValue, sortField, sortOrder ])

  return (
    <div className='user-list'>
      <h1>User list</h1>
      <table>
        <thead>
          <tr>
            <th>
            	Email
             <input
               type='text' onChange={e => {
                 setFilterValue(e.target.value)
                 setFilterField('email')
               }} placeholder='email filter'
             />
             <button onClick={() => {
               setSortField('email')
               setSortOrder('asc')
             }}
             >⌃
             </button>
             <button onClick={() => {
               setSortField('email')
               setSortOrder('desc')
             }}
             >⌄
             </button>
            </th>
            <th>
            	Enabled
            </th>
            <th>
            	Password
						</th>
						<th>
							Type
						 <input
                type='text' onChange={e => {
                  setFilterValue(e.target.value)
                  setFilterField('type')
                }} placeholder='type filter'
              />
              <button onClick={() => {
                setSortField('type')
                setSortOrder('asc')
              }}
              >⌃
              </button>
              <button onClick={() => {
                setSortField('type')
                setSortOrder('desc')
              }}
              >⌄
              </button>
						</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => <User key={user.id} user={user} />)
          }
        </tbody>
      </table>
      <Paginator
        onPageChange={(pageNumber) => setPageNumber(pageNumber)}
        onPageSizeChange={(pageSize) => setPageSize(pageSize)}
        totalRecords={globalState.userAdmin.count}
      />
      <div className='footer'>
        <button onClick={() => navigate(`/users/new`)}>
          Create User
        </button>
      </div>
    </div>
  )
}

export default UserList
