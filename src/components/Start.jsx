import React, {useRef} from 'react'

const Start = ({setUserName}) => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.value && setUserName(inputRef.current.value)

  }
  return (
    <div className='start'>
      <input type="text" placeholder='Enter Your Name' className='startInput' ref={inputRef}/>
      <button className='startBotton' onClick={handleClick}>Start</button>
    </div>
  )
}

export default Start