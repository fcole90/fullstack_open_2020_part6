import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer.js'
import { setNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    const [newAnecdote, setNewAnedocte] = useState('')
    const dispatch = useDispatch()

    const addAnedocte = async (event) => {
      try {
        event.preventDefault()
        dispatch(createNew(newAnecdote))
        dispatch(setNotification(`Added: ${newAnecdote}`, 5))
      }
      catch (error) {
        console.log(error?.data)
        dispatch(setNotification(`Error: ${error?.data}`))
      }
    }

    return (<div>
        <h2>create new</h2>
      <form>
        <div><input value={newAnecdote} onChange={(event) => {setNewAnedocte(event.target.value)}}/></div>
        <button onClick={addAnedocte}>create</button>
      </form>
    </div>)
}

export default AnecdoteForm