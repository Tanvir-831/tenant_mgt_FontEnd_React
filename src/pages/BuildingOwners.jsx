import React from 'react'
import Sidebar from '../components/Sidebar'
import LandLord from './LandLord'

const BuildingOwners = () => {
  return (
    <>
      <div className='d-flex'>
              <div><Sidebar/></div>
              <div><LandLord/></div>
      </div>
    </>
  )
}

export default BuildingOwners
