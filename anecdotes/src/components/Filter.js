import React from 'react'
import { connect } from 'react-redux'
import { filter, resetFilter } from '../reducers/filterReducer'

const Filter = (props) => {
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={(event) => props.updateFilter(event?.target?.value)} />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  updateFilter: (value) => {value ? dispatch(filter(value)) : dispatch(resetFilter())}
})

export default connect(
  null,
  mapDispatchToProps
)(Filter)