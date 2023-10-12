import React from 'react'
import videoimg from '../img/png/videoimg.png'
import vector from '../img/png/Vector.png'

const Sectionmain = () => {
  return (
    <div class="container">
    <div class="row align_centre">
        <div class="col_6 col_sm_12 col_lg_12 col_sm_6 margin_top160">
            <img className='mb-4' src={vector} alt="#"/>
            <div>
                <p class="ff_Poppins fs_16 fw_400 txt_clr4 margin_top">Semper faucibus suscipit ultricies eleifend semper
                    sit tellus gravida pretium. Cras cursus ut semper eleifend tortor lectus tristique turpis.
                    Laoreet amet ultrices est lectus accumsan nibh cursus nunc. Faucibus orci, neque, pretium,
                    massa volutpat convallis nisl pellentesque. Gravida in ultrices vitae tortor. Dignissim
                    viverra volutpat neque gravida aliquet urna faucibus viverra vulputate. nibh cursus nunc.
                    Faucibus orci, neque, pretium, massa volutpat convallis nisl pellentesque. Gravida in
                    ultrices vitae tortor. Dignissim viverra volutpat neque gravida aliquet urna faucibus
                    viverra vulputate.</p>
            </div>
        </div>
        <div class="col_6 col_sm_12 col_lg_12 col_sm_6 margin_top160 mt_30">
            <img className='rounded-5 w-100' src={videoimg} alt=''/>
        </div>
    </div>
</div>
  )
}

export default Sectionmain