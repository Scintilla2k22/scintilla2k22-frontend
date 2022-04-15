import React from 'react'
import Planet from './planet'
import Ripples from './ripples'
import './styles/timeline.scss'

const data = [ {
    title : "DJ Night",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magni laborum reprehenderit."
},
{
    title : "DJ Night",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magni laborum reprehenderit."
},{
    title : "DJ Night",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magni laborum reprehenderit."
},{
    title : "DJ Night",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magni laborum reprehenderit."
},{
    title : "DJ Night",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magni laborum reprehenderit."
},

]

export default function Timeline() {

 
  return (
    
 <div class="wrapper">
<section class="block">
  <div class="each-year">
      { 
      data.map( (ind) =>    <div key ={ind} class="each-event">

        <Ripples />
    </div>)
       
      }   
    </div>
</section>
</div>

  )
}
