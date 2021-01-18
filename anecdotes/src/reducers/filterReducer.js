const initialState = {
  value: ''
}


export const filter = (txt) => ({
  type: 'FILTER',
  data: { filter: txt }
})

export const resetFilter = (msg) => ({
  type: 'RESET'
})


const filterReducer = (state = initialState, action) => {

  switch(action.type) {
    case 'FILTER':
      return {
        value: action.data.filter
      }
    case 'RESET':
      return { 
        value: ''
      }
    default:
      return state
  }
}

export default filterReducer