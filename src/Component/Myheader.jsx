import React from 'react'
import headerimg from "../img/png/headerimg.png";
import headlogo from "../img/png/headlogo.png";
import { Calender, Guiter, People, Tag } from './iconsvg';
import { Location } from './iconsvg';

const Myheader = () => {
  return (
    <section>
    <header class="nav_position">
        <div className='bcg_clr3 nav_position'>
        <div class="container bcg_clr3l">
        <div class="ds_flex justify_content  align_centre pt-2">
            <div class="ds_flex align_centre z_index">
                <img class="border_img w_100" src={headlogo} alt="#"/> 
                <h4 class="ff_Poppins fw_700 fs_36 txt_clr1">Events<span
                        class="ff_Poppins fw_700 fs_36 txt_clr">Free</span></h4>
            </div>
            <label for="menuicon">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <input type="checkbox" id="menuicon" hidden/>
            <ul class="ds_flex align_item sm-screen">
                <li class="ml_60 mb_buttm ml"><a href="w" class="fs_16 ff_Poppins fw_400 txt_clr2">HOME</a></li>
                <li class="ml_60 mb_buttm ml"><a href="w" class="fs_16 ff_Poppins fw_400 txt_clr2">EVENTS</a></li>
                <li class="ml_60 mb_buttm ml"><a href="w" class="fs_16 ff_Poppins fw_400 txt_clr2">FEED</a></li>
                <li class="ml_60 mb_buttm ml"><a href="w" class="fs_16 ff_Poppins fw_400 txt_clr2">USERNAME</a></li>
                <li class="ml_60 mb_buttm ml"><a href="w"class="fs_16 ff_Poppins fw_400 txt_clr3 bcg_log padding_log br_log">LOG OUT</a></li>
            </ul>
        </div>
    </div>
        </div>
    </header>
    <div class="container mt-5 pt-5">
                <div class="row">
                    <div class="col_4 col_sm_12 col_lg_12 col_sm_6 margin_top40">
                    <img className='rounded-5 w-100' src={headerimg} alt="#"/>
                    </div>
                    <div class="col_8 col_sm_12 col_lg_12 col_sm_6 margin_top40">
                        <div class="margin_30">
                            <p class="ff_Poppins fs_16 fw_400 txt_clr4">Home  Username</p>
                            <div class="ds_flex flex_column align_centre justify_content">
                                <h1 class="ff_Poppins fw_600 font_48 txt_clr2">Jhone Doe</h1>
                                <button
                                    class="ff_Poppins fs_16 fw_600 txt_clr2 bcg_clr padding_unshow br_log border_unshow mrgin_40 fss_14 fw_500 p_unshow margin_lft margin_top">Unshow
                                    Journey of Feed</button>
                                <button
                                    class="ff_Poppins fs_16 fw_600 txt_clr3 bcg_log padding_unshow br_log border_unshow margin_20 fss_14 fw_500 padding_show margin_lft margin_top">Show
                                    Journey of Feed</button>
                            </div>
                            <p class="ff_Poppins fs_16 fw_400 txt_clr4 margin_top margin_top margin_top2">Dictumst vulputate eget quisque iaculis hendrerit
                                quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam
                                cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla
                                urna eget aliquet.</p>
                        </div>
                        <div class="ds_flex flex_column margin_30 align_center_xsm margin_top40">
                            <div class="ds_flex align_centre">
                            <span><Calender/></span>
                                <p class="ff_Poppins fs_16 fw_400 txt_clr4 mb-0 ms-2">15/06/2023</p>
                            </div>
                            <div class="ds_flex align_centre margin_40 margin_top margin_lft">
                            <span><Location/></span>
                                <p class="ff_Poppins fs_16 fw_400 txt_clr4 mb-0 ms-2">Mumbai</p>
                            </div>
                            <div class="ds_flex align_centre margin_40 margin_top margin_lft">
                                <span><People/></span>
                                <p class="ff_Poppins fs_16 fw_400 txt_clr4 mb-0 ms-2">1,080</p>
    
                            </div>
                            <div class="ds_flex align_centre margin_40 margin_top margin_lft">
                              <span><Guiter/></span>
                                <p class="ff_Poppins fs_16 fw_400 txt_clr4 mb-0 ms-2">1,080</p>
                            </div>
                            <div class="ds_flex align_centre margin_40 margin_top margin_lft">
                                <span><Tag/></span>
                                <p class="ff_Poppins fs_16 fw_400 txt_clr4 mb-0 ms-2">1,080</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Myheader