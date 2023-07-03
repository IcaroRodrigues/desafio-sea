import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input, Radio, Switch, TreeSelect, Upload } from 'antd'

import backArrow from '../../assets/backArrow.svg'
import { Container, FormContainer } from './styles'
import { createNewEmployee } from '../../Redux/Employee/actions'

const cargoData = [
  {
    value: 'Cargo 1',
    title: 'Cargo 1'
  },
  {
    value: 'Cargo 2',
    title: 'Cargo 2'
  }
]

const epiData = [
  {
    value: 'Calçado de segurança',
    title: 'Calçado de segurança'
  }
]

const atividadeData = [
  {
    value: 'Ativid. 1',
    title: 'Ativid. 1'
  }
]

export const Form = () => {

  const [employeeName, setEmployeeName] = useState('')
  const [employeeCPF, setEmployeeCPF] = useState('')
  const [employeeAtivo, setEmployeeAtivo] = useState(true)
  const [employeeCargo, setEmployeeCargo] = useState('')


  const dispatch = useDispatch()

  const handleReturnToEmployeeList = () => {
    dispatch({
      type: 'showAddEmployeeForm'
    })
  }

  const handleSubmitForm = () => {
    const employeeData = {
      name: employeeName,
      CPF: employeeCPF,
      ativo: employeeAtivo,
      Cargo: employeeCargo
    }

    dispatch(createNewEmployee(employeeData))
    dispatch({
      type: 'showAddEmployeeForm'
    })
  }

  return (
    <Container>
      <header>
        <img src={backArrow} alt="voltar" onClick={handleReturnToEmployeeList} />
        <h1>Adicionar Funcionário</h1>
      </header>
      <FormContainer>
        <div >
          <h3>O trabalhador está ativo ou inativo?</h3>
          <Switch checkedChildren="Ativo" unCheckedChildren="Inativo" style={{ width: '70px' }} onChange={value => setEmployeeAtivo(value)} checked={employeeAtivo}/>
        </div>

        <div className='employeeData'>
          <div>
            <div className="inputContainer">
              <label htmlFor="nome">Nome</label>
              <Input style={{ border: "1px solid #4FA1C1" }} onChange={(e) => setEmployeeName(e.target.value)} />
            </div>
            <div className="inputContainer">
              <label htmlFor="cpf">CPF</label>
              <Input style={{ border: "1px solid #4FA1C1" }} onChange={(e) => setEmployeeCPF(e.target.value)} />
            </div>
            <div className="inputContainer">
              <label htmlFor="rg">RG</label>
              <Input style={{ border: "1px solid #4FA1C1" }} />
            </div>
          </div>

          <div>
            <div className="inputContainer">
              <label htmlFor="">Sexo</label>
              <Radio.Group>
                <Radio value={1}>Masculino</Radio>
                <Radio value={2}>Feminino</Radio>
              </Radio.Group>
            </div>
            <div className="inputContainer">
              <label htmlFor="">Data de nascimento</label>
              <Input style={{ border: "1px solid #4FA1C1" }} />
            </div>
            <div className="inputContainer">
              <label htmlFor="">Cargo</label>
              <TreeSelect style={{ width: "100%", border: "1px solid #4FA1C1", borderRadius: '8px' }} placeholder="Selecione um cargo" treeData={cargoData} onChange={value => setEmployeeCargo(value)} />
            </div>
          </div>
        </div>

        <div className="employeeActivity">
          <h3>Quais EPIs o trabalhador usa na atividade?</h3>
          <div className="epiCheckbox">
            <input type="checkbox" name="usaEPI" id="epi" />
            <label htmlFor="epi">O trabalhador não usa EPI.</label>
          </div>

          <div className="formStep">
            <div className="inputContainer">
              <label htmlFor="">Selecione a atividade:</label>
              <TreeSelect style={{ border: "1px solid #4FA1C1", borderRadius: '8px' }} treeData={atividadeData} />
            </div>
            <div className="caContainer">
              <div className="caInputContainer">
                <label htmlFor="">Selecione o EPI:</label>
                <TreeSelect placeholder="Seleciona um EPI" style={{ border: "1px solid #4FA1C1", borderRadius: '8px' }} treeData={epiData} />
              </div>
              <div className="caInputContainer">
                <label htmlFor="">Informe o número do CA:</label>
                <Input style={{ border: "1px solid #4FA1C1" }} />
              </div>
              <span>Adicionar EPI</span>
            </div>
            <button>Adicionar outra atividade</button>
          </div>

          <div className="formStep">
            <h3>Adicione Atestado de Saúde Ocupacional (opcional):</h3>

            <Upload>
              <button>Selecionar arquivo</button>
            </Upload>
          </div>
        </div>
        <button className='saveButton' onClick={handleSubmitForm}>Salvar</button>

      </FormContainer>


    </Container>
  )
}