import { createReducer } from '@reduxjs/toolkit'
import { getAllEmployeersList } from './actions'

const INITIAL_STATE = {
  employeeList: []
}

export default createReducer(INITIAL_STATE, {
  [getAllEmployeersList.type]: (state, action) => ({ ...state, employeeList: action.payload })
})