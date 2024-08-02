import React from 'react'
import logo from "../img/RVS 1.png"
import userphoto from "../img/user.png";
import { BsGridFill } from "react-icons/bs";
import { FaHome} from "react-icons/fa";
import { FaConciergeBell } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="flex flex-col ">
      <img
       className="bg-white rounded-xl mx-10 my-2 w-1/2 h-13 " 
       src={logo} alt="Mon_logo"/>
      <button className="bg-white w-full flex items-center gap-3 justify-center py-5">
       <BsGridFill />
          Tableau de bord
      </button>
      <ul className="my-10 mx-auto">
      <li>
        <img src={userphoto} className='w-1/2' alt="user_photo"/>
      </li>
        <li >
         <Link className='flex items-center gap-3 hover:bg-white py-3' to='/'>
          <FaHome className="text-sky-900 text-2xl"/>
        Acceuil
        </Link>
      </li>
      <li >
          <Link className="flex items-center gap-3 hover:bg-white  py-3" to='/Dashboard/Mesrendezvous'>
         <FaConciergeBell className="text-sky-900 text-2xl" />
         Mes rendez-vous
         </Link>
         </li>
      <li >
          <Link className="flex items-center gap-3 hover:bg-white  py-3" to='/Dashboard/Patient'>
          <FaUserGroup className="text-sky-900 text-2xl"/>
         Mes patients
         </Link>
      </li>
      <li>
          <Link className="flex items-center gap-3 hover:bg-white  py-3" to='/Dashboard/Moncompte'>
         <FaUser className="text-sky-900 text-2xl"/>
      Mon compte
      </Link>
      </li>
      </ul>
      <Link to="/">
<button
className="flex items-center relative px-2 mx-8 w-40
 py-2 rounded-md bg-white isolation-auto z-5 border-4
  border-blue-400 before:absolute before:w-full before:transition-all
   before:duration-700 before:hover:w-full before:-left-full
    before:hover:left-0 before:rounded-full before:bg-blue-500
     before:-z-5 before:aspect-square before:hover:scale-150
      overflow-hidden before:hover:duration-700">
  Deconnexion
</button>
      </Link>
    </div>
   
  )
}

export default Sidebar
