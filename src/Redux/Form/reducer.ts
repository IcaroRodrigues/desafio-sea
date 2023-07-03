import { createReducer } from '@reduxjs/toolkit'
import { showAddEmployeeForm, stepDone } from './action'

const INITIAL_STATE = {
  stepDone: false,
  showAddEmployee: false
}

export default createReducer(INITIAL_STATE, {
  [showAddEmployeeForm.type]: (state, action: any) => ({
    ...state, showAddEmployee: !state.showAddEmployee
  }),
  [stepDone.type]: (state, action: any) => ({
    ...state, stepDone: !state.stepDone
  })
})