import anecdotesService from '../services/anecdotes'


const getId = () => (100000 * Math.random()).toFixed(0)


export const asObject = (anecdote) => (
  {
    content: anecdote,
    id: getId(),
    votes: 0
  }
)

export const initialState = []


export const voteFor = (anecdote) => (
  async dispatch => (
    dispatch({
      type: 'REPLACE',
      data: await anecdotesService.update({
        ...anecdote,
        votes: anecdote.votes + 1
      })
    })
  )
)


export const createNew = (anecdoteContent) => (
  async dispatch => (
    dispatch({
      type: 'CREATE',
      data: await anecdotesService.createNew(asObject(anecdoteContent))
    })
  )
)


export const add = (anecdote) => ({
  type: 'CREATE',
  data: anecdote
})


export const initialise = () => (
  async dispatch => (
    dispatch({
      type: 'INIT',
      data: await anecdotesService.getAll()
    })
  )
)


const anecdotesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'REPLACE': 
    return state.map(el => (
      el.id === action.data?.id ? action.data
      : el
    ))
    case 'CREATE':
      return [...state, action.data]
    case 'INIT':
      return action.data
    default:
      return state
  }
}


export default anecdotesReducer