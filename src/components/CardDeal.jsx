import React from 'react'
import { support } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Your Partner Beyond Preparation<br className='sm:block hidden'/></h2>
        <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient'>"Continuous Support for Your Career Journey"</p>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        Enjoy ongoing assistance after your training. Our dedicated support team is available to provide guidance, answer questions, and offer feedback whenever you need it, ensuring you remain confident and prepared for all career opportunities.
        </p>
        {/* <Button styles='mt-10'/> */}
      </div>
      <div className={layout.sectionImg}>
        <img
          src={support}
          alt='support'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
