import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch } from 'antd'

import { fetchEmployeers } from '../../Redux/Employee/actions'

import { Container, EmployeeListContainer, EmployeeListFilterContainer } from './styles'

import moreInfo from '../../assets/Vector.svg'

export const EmployeeList = () => {

  const dispatch = useDispatch()

  const { stepDone } = useSelector((state: any) => state.form)
  const { employeeList } = useSelector((state: any) => state.employee)
  const [filteredEmployeeList, setFilteredEmployeeList] = useState([])
  const [filter, setFilter] = useState(false)

  useEffect(() => {
    dispatch(fetchEmployeers())
  }, [dispatch])

  useEffect(() => {
    if (employeeList.length > 0) {
      setFilteredEmployeeList(employeeList.filter((employee: any) => employee.ativo === true))
    }
  }, [employeeList])


  const handleStepDone = () => {
    dispatch({
      type: 'stepDone'
    })
  }

  const handleShowAddEmployeeForm = () => {
    dispatch({
      type: 'showAddEmployeeForm'
    })
  }

  const handleFilterEmployeeList = () => {
    setFilter(true)
  }

  return (
    <Container>
      <header>
        <h1>Funcionário(s)</h1>
      </header>
      <EmployeeListContainer>
        <button className='adicionarFuncionarioButton' onClick={handleShowAddEmployeeForm}>+ Adicionar Funcionário</button>

        <EmployeeListFilterContainer>
          <div className='employeeListFilterButtons'>
            <div className='buttons'>
              <button onClick={handleFilterEmployeeList} className={filter ? 'filterButton' : ''}>Ver apenas ativos</button>
              <button onClick={() => setFilter(false)}>Limpar Filtros</button>
            </div>
            <p>Ativos {filteredEmployeeList.length}/{employeeList.length}</p>
          </div>
          <div className="empoyeeList">
            <ul>

              {filter ?
                (
                  <>
                    {filteredEmployeeList && filteredEmployeeList.map((employee: any) => (
                      <li key={employee.id}>
                        <div className="employeeListcontainer">
                          <h2>{employee.name}</h2>
                          <span>{employee.CPF}</span>
                          {employee.ativo && (<span>Ativ 00</span>)}
                          <span>{employee.Cargo}</span>
                        </div>
                        <button className="moreInfo"><img src={moreInfo} alt="" /></button>
                      </li>
                    ))}
                  </>
                )
                :
                (
                  <>
                    {employeeList.length > 0 && employeeList.map((employee: any) => (
                      <li key={employee.id} >
                        <div className="employeeListcontainer">
                          <h2>{employee.name}</h2>
                          <span>{employee.CPF}</span>
                          {employee.ativo && (<span>Ativ 00</span>)}
                          <span>{employee.Cargo}</span>
                        </div>
                        <button className="moreInfo"><img src={moreInfo} alt="" /></button>
                      </li>
                    ))}
                  </>
                )}

            </ul>
          </div>
          <div className="stepDone">
            <span>A etapa está concluída?</span>
            <Switch checkedChildren="Sim" unCheckedChildren="Não" className='switch' onClick={handleStepDone} checked={stepDone} />
          </div>
        </EmployeeListFilterContainer>
      </EmployeeListContainer>
    </Container>
  )
}