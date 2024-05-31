import {BrowserRouter,Routes,Route}  from 'react-router-dom';
import Home from '../pages/Home'
import Location  from '../pages/Location'
import Owner from '../pages/Owner'
import Navbar from './Navbar'
import About from '../pages/About'
import Admin from '../pages/Admin'
import Available from '../pages/Available'
import Contact from '../pages/Contact'
import Tenant from '../pages/Tenant'
import SignUp from '../pages/SignUp'
import Foot from './Foot';
import BuildingOwners from '../pages/BuildingOwners'
import Billing from '../pages/Billing'
import ListTenants from '../pages/ListTenants'
import Reports from '../pages/Reports'
import Admind from '../pages/Admind'
import List from '../pages/list'

export default function App()
 {
  return (
    <>
     <Navbar/>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/location' element={<Location/>}/>
            <Route path='/Owner' element={<Owner/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Admin' element={<Admin/>}/>
            <Route path='/Available' element={<Available/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Tenant' element={<Tenant/>}/>
            <Route path='/SignUp' element={<SignUp/>}/>
            <Route path='/BuildingOwners' element={<BuildingOwners/>}/>
            <Route path='/Billing' element={<Billing/>}/>
            <Route path='/ListTenants' element={<ListTenants/>}/>
            <Route path='/Reports' element={<Reports/>}/>
            <Route path='/Admind' element={<Admind/>}/>
            <Route path='/List' element={<List/>}/>
            
          </Routes>
      </BrowserRouter>  
      <Foot/>
    </>
  )
}
