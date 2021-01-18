import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer.js'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteForm = (props) => {
    const [newAnecdote, setNewAnedocte] = useState('')

    return (<div>
        <h2>create new</h2>
      <form>
        <div><input value={newAnecdote} onChange={(event) => {setNewAnedocte(event.target.value)}}/></div>
        <button onClick={(event) => {event.preventDefault(); props.addAnedocte(newAnecdote)}}>create</button>
      </form>
    </div>)
}


const mapDispatchToProps = dispatch => ({
  addAnedocte: (anecdote) => {
    try {
      dispatch(createNew(anecdote))
      dispatch(setNotification(`Added: ${anecdote}`, 5))
    }
    catch (error) {
      console.log(error?.data)
      dispatch(setNotification(`Error: ${error?.data}`))
    }
  }
})

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)