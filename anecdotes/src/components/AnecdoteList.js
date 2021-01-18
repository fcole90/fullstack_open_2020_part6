import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer.js'
import { setNotification, resetNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {

  const matchWordsFilter = (sentence, filter) => (
      filter.split(' ').every(filterItem => (
        sentence.split(' ').some(word => (
          word.toLowerCase().startsWith(filterItem.toLowerCase())
        ))
      ))
    )

  const anecdotes = useSelector(state => 
    state.anecdotes.filter(
      anecdote => matchWordsFilter(anecdote.content, state.filter.value)
    )
  )

  const dispatch = useDispatch()

  const voteHandler = (event, anecdote) => {
    event.preventDefault()
    dispatch(voteFor(anecdote))
    dispatch(setNotification(`Voted for: ${anecdote.content}`, 5))
  }

  return (
    <div>
      {anecdotes.sort((a, b) => (b.votes - a.votes)).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={(event) => voteHandler(event, anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
)}

export default AnecdoteList