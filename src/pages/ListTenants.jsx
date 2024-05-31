import React from 'react'
import Sidebar from '../components/Sidebar'
import List from '../pages/list'

const ListTenants = () => {
  return (
    <>
    <div className='d-flex'>
            <div><Sidebar/></div>
            <div><List/></div>
    </div>
  </>
  )
}
export default ListTenants
