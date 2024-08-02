import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Affordable Training for Your Path to Career Success!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to kickstart and advance your career.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button text="View our interview-prep program" link="https://pages.razorpay.com/Fluenciv"/>
      </div>
    </section>
  )
}

export default CTA
