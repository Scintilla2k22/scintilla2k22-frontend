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

// var $element=$('.each-event, .title');
// var $window = $(window);
// $window.on('scroll resize', check_for_fade);
// $window.trigger('scroll');
// function check_for_fade() { 
//     var window_height = $window.height();
    
//     $.each($element, function (event) {
//         var $element = $(this);
//         var element_height = $element.outerHeight();
//         var element_offset = $element.offset().top;
//         space = window_height - (element_height + element_offset -$(window).scrollTop());
//         if (space < 60) {
//             $element.addClass("non-focus");
//         } else {
//             $element.removeClass("non-focus");
//         }
 
//     });
// };

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
