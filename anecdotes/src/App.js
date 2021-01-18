import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'

import { initialise } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

import Notification from './components/Notification'
import Filter from './components/Filter'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    try {
      dispatch(initialise())
    } catch (error) {
      console.log(error?.data)
    }
  }, [dispatch])

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

export default App