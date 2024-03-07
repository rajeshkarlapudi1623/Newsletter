import React from 'react'
import iconSvg from '../../assets/images/icon-list.svg'
import './Success.css'

const Success = (props) => {
  return (
    <div className='success-wrapper'>
      <div className='success-text'>
        <img src={iconSvg} alt='icon' />
        <h1>Thanks for <br />
          subscribing!
        </h1>
        <span>
          A confirmation email has been sent to <strong>{props.email}</strong>. Please open it and click the button inside to confirm your subscription.
        </span>
      </div>
      <button onClick={props.onClick}>Dismiss message</button>
    </div>
  )
}

export default Success
