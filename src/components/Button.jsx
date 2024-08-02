import React from 'react'

const Button = ({ styles, link, text="Get connected"}) => {
  const handleClick = () => {
    if (link) {
      window.location.href = link
    }
    else{
      window.location.href = 'https://r9yn806z8bd.typeform.com/to/DDAEYsBW';
    }
  };

  return (
    <button type='button' onClick={handleClick} className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      {text}
    </button>
  )
}

export default Button
