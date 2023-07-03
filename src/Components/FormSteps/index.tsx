import { useSelector } from 'react-redux'

import { Container } from './styles'

import whiteHomeSvg from '../../assets/Group.svg'

export const FormSteps = () => {

  const { stepDone } = useSelector((state: any) => state.form)

  return (
    <Container>
      <div className='steps'>
        <div className={`icon iconStepDone`}>
          <img src={whiteHomeSvg} alt="" className='svg' />
        </div>

        <div className="stepLabel">
          <p>ITEM 1</p>

          {stepDone && (
            <span className="stepDone">CONCLUIDO</span>
          )}
        </div>
      </div>

      <div className='line'></div>

      <div className='steps'>
        <div className="icon">
          <img src={whiteHomeSvg} alt="" />
        </div>
        <p>ITEM 1</p>
      </div>

      <div className='line'></div>

      <div className='steps'>
        <div className="icon">
          <img src={whiteHomeSvg} alt="" />
        </div>
        <p>ITEM 1</p>
      </div>

      <div className='line'></div>

      <div className='steps'>
        <div className="icon">
          <img src={whiteHomeSvg} alt="" />
        </div>
        <p>ITEM 1</p>
      </div>

      <div className='line'></div>

      <div className='steps'>
        <div className="icon">
          <img src={whiteHomeSvg} alt="" />
        </div>
        <p>ITEM 1</p>
      </div>

      <div className='line'></div>

      <div className='steps'>
        <div className="icon">
          <img src={whiteHomeSvg} alt="" />
        </div>
        <p>ITEM 1</p>
      </div>

      <div className='line'></div>

      <div className='steps'>
        <div className="icon">
          <img src={whiteHomeSvg} alt="" />
        </div>
        <p>ITEM 1</p>
      </div>

      <div className='line'></div>

      <div className='steps'>
        <div className="icon">
          <img src={whiteHomeSvg} alt="" />
        </div>
        <p>ITEM 1</p>
      </div>

      <div className='line'></div>

      <div className='steps'>
        <div className="icon">
          <img src={whiteHomeSvg} alt="" />
        </div>
        <p>ITEM 1</p>
      </div>
    </Container>
  )
}