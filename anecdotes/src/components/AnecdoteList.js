import React from 'react'
import { connect } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer.js'
import { setNotification } from '../reducers/notificationReducer'


const matchWordsFilter = (sentence, filter) => (
  filter.split(' ').every(filterItem => (
    sentence.split(' ').some(word => (
      word.toLowerCase().startsWith(filterItem.toLowerCase())
    ))
  ))
)


const AnecdoteList = (props) => {

  const {anecdotes} = props

  const voteHandler = (event, anecdote) => {
    event.preventDefault()
    props.voteFor(anecdote)
    props.setNotification(`Voted for: ${anecdote.content}`, 5)
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


const mapStateToProps = (state) => ({
  anecdotes: state.anecdotes.filter(
    anecdote => matchWordsFilter(anecdote.content, state.filter.value)
  )
})

const mapDispatchToProps = {
  voteFor,
  setNotification
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)