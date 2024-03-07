import React, { useRef, useState } from 'react'
import Success from '../success/Success'
import iconSvg from '../../assets/images/icon-list.svg'
import imageSvg from '../../assets/images/illustration-sign-up-desktop.svg'
import './Newsletter.css'

const Newsletter = () => {
  const [input, setInput] = useState('')
  const [onError, setOnError] = useState(false)
  const [success, setSuccess] = useState(false)

  const inputRef = useRef(null)

  const handleSuccess = () => {
    setSuccess(false)
    setInput('')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input)) {
      setSuccess(true)
      setOnError(false)
    } else {
      setOnError(true)
      inputRef.current.focus()
    }
  }

  const handleChange = (e) => {
    setInput(e.target.value)
    e.preventDefault()
    setOnError(false)
  }

  if (success) {
    return <Success email={input} onClick={() => handleSuccess()} />
  }

  return (
    <div className='newsletter-wrapper'>
      <div className='newsletter'>
        <div className='newsletter-content'>
          <div className='newsletter-content_text'>
            <h1>Stay updated!</h1>
            <span>Join 60,000+ product managers receiving monthly<br /> updates on: </span>
            <div className='benefits'>
              <p><img src={iconSvg} alt='icon' />Product discovery and building what matters</p>
              <p><img src={iconSvg} alt='icon' />Measuring to ensure updates are a success</p>
              <p><img src={iconSvg} alt='icon' />And much more!</p>
            </div>
          </div>
          <form autoComplete='off' onSubmit={handleSubmit} className='newsletter-form'>
            <div className='email'>
              <div className='email-error'>
                <p>Email address</p>
                <p style={onError ? { display: 'block' } : { display: 'none' }}>Valid mail required</p>
              </div>
              <input
                ref={inputRef}
                style={onError ? { border: '1px solid #c0817c', backgroundColor: '#ffe8e6', outline: 'none' } : {}}
                onChange={handleChange}
                type='text'
                name='email'
                placeholder='email@company.com'
              />
            </div>
            <button type='submit'>Subscribe to monthly newsletter</button>
          </form>
        </div>
        <div className='newsletter-img'>
          <img className='image' src={imageSvg} alt='' />
        </div>
      </div>
    </div>

  )
}

export default Newsletter
