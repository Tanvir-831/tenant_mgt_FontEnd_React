import React from 'react'
import map from '../assets/map.png'
import map2 from '../assets/map2.jpg'
import map3 from '../assets/map3.jpg'
import './pstyle.css'
const Location = () => {
  return (
    <>
      <div className='container mb-5 ml-5 mr-5'>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 img-carosel" src={map} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 img-carosel " src={map2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100  img-carosel" src={map3} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
    </>
  )
}

export default Location
