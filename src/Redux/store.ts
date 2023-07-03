import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import formReducer from './Form/reducer'
import employeeReducer from './Employee/reducer'

const store = configureStore({
  reducer: {
    form: formReducer,
    employee: employeeReducer
  },
  middleware: [thunk, logger],
})

export default store