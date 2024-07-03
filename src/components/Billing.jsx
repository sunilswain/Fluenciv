import React from 'react'
import { career_progress } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={career_progress}
          alt='billing'
          className='w-[90%] h-[90%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Focus on Your Future,<br className='sm:block hidden'/> We Handle the Rest</h2>
        <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient'>"Affordable Career Development Solutions"</p>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        With our expert-led training programs, we take care of your preparation needs so you can focus on achieving your career goals. Leveraging proven strategies and personalized support, we ensure you're ready for every opportunity.
        </p>
      </div>  
    </section>
  )
}

export default Billing
