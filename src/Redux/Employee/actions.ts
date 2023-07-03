import { createAction } from '@reduxjs/toolkit';

import api from '../../Services/api';

export const getAllEmployeersList = createAction('getAllEmployeersList')

export const fetchEmployeers: any = () => {
  return async (dispatch: any) => await api.get('/employeers')
    .then(res => dispatch(getAllEmployeersList(res.data)))
}

export const createNewEmployee: any = (employeeData: any) => {
  return async (dispatch: any) => await api.post('/employeers', employeeData)
    .then(res => dispatch(getAllEmployeersList(res.data)))
}