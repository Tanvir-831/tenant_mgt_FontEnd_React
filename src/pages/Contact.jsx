import React from 'react'
import './pstyle.css'
const Contact = () => {
  return (
    <>
      <div className="home container">
        <div>
          <h1 className="display-4  text-light">
            Tenant Harmony, Property Prosperity - We Simplify Management for
            You
          </h1>
        </div>
        <div>
          <h2 className="display-5  text-light text-center mt-4 mr-5">
         Contact Us!!!
          </h2>
        </div>
        <div>
          <form className="form-flex">
            <div className='ttbox d-flex '>
              <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Name* "
              aria-label="text"
             />
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Email* "
              aria-label="text"
             />
            
            </div>



            <div className='ttbox d-flex '>
              <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Phone* "
              aria-label="text"
             />
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Questions or Services Interested in* "
              aria-label="text"
             />
            
            </div>
            <button className="subbutton btn btn-primary my-2 my-sm-0 " type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
export default Contact
