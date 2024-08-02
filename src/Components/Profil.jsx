import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom"

export const Profil = () => {
  return (
    <>
    
      <div className='flex justify-center'>
        <FaUserCircle className='mx-auto w-32 h-32'/>     
     </div>
      <div className='py-2 ml-20 mt-10 flex justify-center'>
        <div className='items-center'>
      <input className="w-80 p-4 m-4 bg-slate-200 text-black" type="text" placeholder="Prénom" /><br />
      <input className="w-80 p-4 m-4 bg-slate-200" type="password" placeholder="Nom" /><br />
      <input className="w-80 p-4 m-4 bg-slate-200" type="text" placeholder="Age" /><br />
      <input className="w-80 p-4 m-4 bg-slate-200" type="password" placeholder="Adresse" /><br />
      <input className="w-80 p-4 m-4 bg-slate-200" type="password" placeholder="Téléphone" /><br />
        <Link to="/Dashboard/Patient">
        <button className="bg-sky-500 text-white py-2 rounded-xl text-xl my-4 font-bold w-80">
          Valider
          </button>
          </Link>
      </div>
      </div>

</>
  )
}