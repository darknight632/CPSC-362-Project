import React from 'react'

const Button = (byColor, color, size, text, borderRadius) => {
  return (
    <button type='button'  style={{backgroundColor: byColor, color, borderRadius}} className={"text-$(size)"}>
      
    </button>
  )
}

export default Button