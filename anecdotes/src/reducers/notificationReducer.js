const initialState = {
  message: ''
}


export const resetNotification = () => ({
  type: 'RESET'
})


export const setNotification = (msg, seconds) => (
  dispatch => {
    dispatch({
      type: 'SET',
      data: { message: msg }
    })
    if (seconds) {
      setTimeout(
        () => dispatch(resetNotification()),
        seconds * 1000
      )
    }
  }
)


const notificationReducer = (state = initialState, action) => {

  switch(action.type) {
    case 'SET':
      return {
        message: action.data.message
      }
    case 'RESET':
      return { 
        message: 'No other notifications'
      }
    default:
      return state
  }
}

export default notificationReducer