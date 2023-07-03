import { useSelector } from 'react-redux'

import { FormSteps } from '../../Components/FormSteps'
import { SideBar } from '../../Components/SideBar'
import { Container, FormContainer, FormDescription } from './styles'

import svgImage from "../../assets/Frame.svg"
import { EmployeeList } from '../../Components/EmployeeList'
import { Form } from '../../Components/Form'

export const Cadastro = () => {

  const { showAddEmployee } = useSelector((state: any) => state.form)

  return (
    <Container>
      <SideBar />
      <div className='form'>
        <FormContainer>
          <FormSteps />
          <FormDescription>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit suscipit porttitor. Suspendisse ex lorem, rhoncus nec ante eu, venenatis aliquam turpis. Nulla facilisi. Curabitur nec mattis dolor. Nulla finibus bibendum ligula tempus vehicula. Ut at tristique libero, nec efficitur dui. Aliquam erat volutpat. Fusce quam sem, tempus nec justo eget, luctus scelerisque velit. Nam sollicitudin purus urna, vitae ornare neque tincidunt vel. Proin ac lacinia erat, et commodo felis. Phasellus tempor tellus eu vulputate tempus.
            </p>

          </FormDescription>

          {showAddEmployee ? <Form /> : <EmployeeList />
          }

        </FormContainer>

        {!showAddEmployee && <button className="nextStep">Próximo passo</button>}

        <img src={svgImage} alt="funcionario" className='employeeImage' />
      </div>


    </Container>
  )
}
