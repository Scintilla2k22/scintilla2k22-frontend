import React from 'react'
import './styles/ripples.scss'
import { asset } from '../../utils'

export default function Ripples(props) {

  const {
    id,
    data,
    content
  } = props;

  return (
    <div className='ripple-box'>
      <div className='image' >
        <img src = {`${asset}/memories/img${id}.webp`} />
      </div>
      {content}

    </div>
  )
}
