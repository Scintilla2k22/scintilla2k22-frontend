import React from 'react'
import Planet from '../../Arts/planet'
import Timeline from '../../Arts/timeline'
import './style.scss'
export default function Memories() {
  return (
    <div className='memories-box' >
        <h2 className='heading'>
            Glimpse of 2K19
        </h2>
        <Timeline />
        <Planet />

    </div>
  )
}
