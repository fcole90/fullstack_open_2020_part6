const initialState = {
  message: '',
  timeoutID: null
}


export const resetNotification = () => ({
  type: 'RESET'
})


export const setNotification = (msg, seconds) => (
  dispatch => {
    dispatch({
      type: 'SET',
      data: { 
        message: msg,
        timeoutID: seconds && seconds > 0 ? setTimeout(
          () => dispatch(resetNotification()),
          seconds * 1000
        )
        : null
      }
    })
  }
)


const notificationReducer = (state = initialState, action) => {

  switch(action.type) {
    case 'SET':
      if (state.timeoutID) {
        clearTimeout(state.timeoutID)
      }
      return {
        ...state,
        ...action.data
      }
    case 'RESET':
      return { 
        ...state,
        message: 'No other notifications',
        timeoutID: null
      }
    default:
      return state
  }
}

export default notificationReducer