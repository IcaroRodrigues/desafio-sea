import { useState } from 'react'

import { Container } from './styles'

import home from '../../assets/home.svg'
import notification from '../../assets/notification.svg'
import recents from '../../assets/recent.svg'
import professional from '../../assets/Frame (3).svg'
import formIcon from '../../assets/formIcon.svg'
import group from '../../assets/groupIcon.svg'
import file from '../../assets/Group 88.svg'

export const SideBar = () => {

  const [activeBar, setActiveBar] = useState(2)

  return (
    <Container>
      <div className='divisor' />
      <nav>
        <ul>
          <li>
            <div className={`${activeBar == 1 ? 'activeBar' : ''}`}></div>
            <div className='iconContainer' onClick={() => setActiveBar(1)}>
              <img src={home} alt="" />
            </div>
          </li>
          <li>
            <div className={`${activeBar == 2 ? 'activeBar' : ''}`}></div>
            <div className='iconContainer' onClick={() => setActiveBar(2)}>
              <img src={formIcon} alt="" />
            </div>
          </li>
          <li>
            <div className={`${activeBar == 3 ? 'activeBar' : ''}`}></div>
            <div className='iconContainer' onClick={() => setActiveBar(3)}>
              <img src={group} alt="" />
            </div>
          </li>
          <li>
            <div className={`${activeBar == 4 ? 'activeBar' : ''}`}></div>
            <div className='iconContainer' onClick={() => setActiveBar(4)}>
              <div className="notification">
                <img src={notification} alt="" />
                <img src={file} alt="" className='file' />
              </div>
            </div>
          </li>
          <li>
            <div className={`${activeBar == 5 ? 'activeBar' : ''}`}></div>
            <div className='iconContainer' onClick={() => setActiveBar(5)}>
              <img src={recents} alt="" />
            </div>
          </li>
          <li>
            <div className={`${activeBar == 6 ? 'activeBar' : ''}`}></div>
            <div className='iconContainer' onClick={() => setActiveBar(6)}>
              <img src={professional} alt="" />
            </div>
          </li>

        </ul>
      </nav>
    </Container>
  )
}