import React, { useState } from 'react'
import { 
  Footer, 
  Offers
} from './components'
import styles from './style'
import ReactDOM from 'react-dom/client'
import './index.css'
import { close, logo, fluenciv_white,  menu } from './assets'

const [toggle, setToggle] = useState(false)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <nav className='w-full flex py-6 justify-between items-center navbar'>
          <img src={fluenciv_white} alt='hoobank' className='w-[124px] h-[32px]'/>
          <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
              <li 
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px]  text-white mr-10`}
              >
                <a href="/">
                  Home
                </a>
              </li>        
          </ul>
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle((previous) => !previous)}
            />
            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
              <ul className='list-none flex flex-col justify-end items-center flex-1'>
                  <li 
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] mr-0 text-white mr-10`}
                  >
                    <a href={"/"}>
                      {nav.title}
                    </a>
                  </li>        
              </ul>
            </div>
          </div>
        </nav>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}> 
          <Offers/>    
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer/>     
        </div>
      </div>
    </div>
  </React.StrictMode>,
)