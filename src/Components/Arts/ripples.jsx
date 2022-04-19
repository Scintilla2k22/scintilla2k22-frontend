import React from 'react'
import './styles/ripples.scss'
import { asset } from '../../utils'

export default function Ripples(props) {

  const {
    id
  } = props;

  return (
    <div className='ripple-box'>
      <div className='image' style={{ background: `url(${asset}/memories/img${id + 1}.jpg` }}  >

      </div>
    </div>
  )
}
