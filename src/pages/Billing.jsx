import React from 'react'
import Sidebar from '../components/Sidebar'
import Bill from '../pages/Bill'

const Billing = () => {
  return (
    <>
      <div className='d-flex'>
              <div><Sidebar/></div>
              <div><Bill/></div>
      </div>
    </>
  )
}

export default Billing
