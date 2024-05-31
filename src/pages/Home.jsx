import React from 'react'
import './pstyle.css'
const Home = () => {
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
          <form className=" form-block">
            <input
              className="tbox form-control mr-sm-2"
              type="search"
              placeholder="                       Any Query!!!"
              aria-label="Search"
            />
            <button className="subbutton btn btn-primary my-2 my-sm-0" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
export default Home
