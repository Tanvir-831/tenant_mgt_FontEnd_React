import React from 'react'
import './pstyle.css'
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
import b4 from '../assets/b4.jpg'
import b5 from '../assets/b5.jpg'
import b6 from '../assets/b6.jpg'

const Available = () => {
  return (
    <> 
    <div className='mb-2'><marquee behavior="" direction="Left"><h4 className="display-10  text-light">* Tenant Harmony, Property Prosperity - We Simplify Management for
            You *</h4></marquee></div>
    <div class="mm" >
      <div className="container">
        <div class="card-deck">
          <div class="card">
            <img class="card-img-top" src={b1} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Taj Tower</h5>
              <p class="card-text">
                Step into the future of comfortable and convenient living at Taj
                place. This building has been meticulously designed to offer you
                the ultimate residential experience. As a potential tenant,
                you'll find this property to be a haven of modern living that
                combines style, functionality, and an unmatched location.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={b2} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Akiz Tower</h5>
              <p class="card-text">
                Akiz Tower is an architectural gem that boasts a contemporary
                design with clean lines and a striking facade. It exudes a sense
                of luxury and sophistication that immediately captivates the
                eye. The building's modern aesthetic is complemented by large
                windows that flood the interior spaces with natural light,
                offering breathtaking views of the city.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={b3} alt="Card image cap" />
            <div class="card-body"><h5>Sorif Tower</h5>
              <p class="card-text">
                Inside, you'll discover thoughtfully designed living spaces. The
                apartments are spacious and beautifully appointed, featuring
                open floor plans that create an inviting and airy atmosphere.
                High-quality materials and finishes have been used throughout,
                ensuring your comfort and satisfaction.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className="container mt-5">
        <div class="card-deck">
          <div class="card">
            <img class="card-img-top" src={b4} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Akib Plaza</h5>
              <p class="card-text">
                Alif Tower is not just a building; it's a community. Residents have access to an array of amenities, including a fitness center, a rooftop terrace with stunning city views, and a communal lounge for social gatherings. Our building fosters a sense of belonging and offers opportunities to connect with your neighbors.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={b5} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Sweet Plazae</h5>
              <p class="card-text">
              Situated in the heart of the city, Sweet Plaza offers an unbeatable location. You'll have quick and easy access to restaurants, shops, entertainment, and public transportation. Your new home is not just a place to live; it's a gateway to the vibrant lifestyle that the city has to offer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={b6} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Moti Plaza</h5>
              <p class="card-text">
              At Moti Plaza, we aim to provide our tenants with more than just a place to stay; we offer a lifestyle. Whether you're an urban professional or a family seeking a comfortable abode, this building is a place where you can truly make yourself at home. We invite you to schedule a visit and experience the difference for yourself – the lifestyle you've been searching for awaits.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
export default Available
