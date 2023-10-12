import React from 'react'
import line from '../img/png/line.png'
import grid1 from '../img/png/grid1.png'
import grid2 from '../img/png/grid2.png'
import grid3 from '../img/png/grid3.png'
import grid4 from '../img/png/grid4.png'
import grid5 from '../img/png/grid5.png'
import grid6 from '../img/png/grid6.png'

const Sectiongallery = () => {
  return (
    <div class="container">
    <div class="ds_flex justify_content_centre margin_top90">
        <img src={line} alt="#"/> 
    </div>
    <div class="ds_flex justify_content_centre">
        <h1 class="ff_Poppins fs_48 fw_600 txt_clr2">Gallery</h1>
    </div>
    <div class="gridbox">
        <img class="g_item g_item1 border_img" src={grid1} alt="#"/> 
        <img class="g_item g_item2 border_img" src={grid2} alt="#"/> 
        <img class="g_item g_item3 border_img" src={grid3} alt="#"/>
        <img class="g_item g_item4 border_img" src={grid4} alt="#"/>
        <img class="g_item g_item5 border_img" src={grid5} alt="#"/> 
        <img class="g_item g_item6 border_img" src={grid6} alt="#"/>
    </div>
</div>
  )
}

export default Sectiongallery