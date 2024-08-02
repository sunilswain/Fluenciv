import React from 'react'
import { quotes } from '../assets'
import { offers } from '../constants'
import styles from '../style'
import Button from './Button'

const Offers = () => {
  return (
    <section id='offerings' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'/>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>We care about you <br className='sm:block hidden'/>And that's why we offer</h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px] text-gradient`}>
            Everything you need to kickstart and advance your career.
          </p>  
        </div>
      </div>
      <div className='flex flex-wrap justify-center w-full feedback-contrainer relative z-[1]'>
        {offers.map((offer) => (
          <div key={Offers.id} className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[600px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
            <div className='flex justify-center'>
              <img
                src={offer.image}
                alt='double-quotes'
                className='w-[300px] offer-img justify-center'
              />
            </div>
            <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white my-10'>{offer.title}</h4>
            <p className='font-poppins font-normal text-[16px] leading-[24px] text-white w-[300px]'>{offer.description}</p>
            <p className='font-poppins font-semibold text-[20px] leading-[32px] text-white my-10'>What you will get</p>
            <ul className='font-poppins font-normal text-[18px] leading-[32px] text-white list-disc list-inside'>
              {offer.includes.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
            <Button styles='mt-10 font-semibold' link={offer.link} text="Take"/>
          </div>       
        ))}
      </div>      
    </section>
  )
}

export default Offers
