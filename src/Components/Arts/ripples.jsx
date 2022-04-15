import React from 'react'
import './styles/ripples.scss'
import { asset } from '../../utils'

export default function Ripples() {
  return (
    <div className='ripple-box'>
        <div className='image' style = {{ background : ` url(${asset}/image/dance.jpg)`}}  >
          
        </div>
    </div>
  )
}
