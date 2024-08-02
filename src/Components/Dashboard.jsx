import React from 'react'
import Sidebar from './Sidebar'
import {Outlet} from 'react-router-dom'
import Acceuil from '../Pages/Acceuil'

const Dashboard=()=>{
    return(
        <div className='flex'>
           <div className="w-1/5 h-100 bg-sky-300 py-8 ">
            <Sidebar/>
           </div>
           <div className="w-4/5 h-full ">
           
           <Outlet/>
           </div>  
        </div>
      
    )
}
export default Dashboard