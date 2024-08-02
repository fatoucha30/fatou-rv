import React from 'react'
import logo from "../img/RVS 1.png"
import { Link } from "react-router-dom"

export const RV = () => {
  return (
    <>
    
    <div className='flex justify-center '>
        <img src={logo} className='mx-auto my-2  w-60 h-36'  alt="logo"/>
     
     </div>
      <div className="py-2 ml-20 mt-10 flex justify-center ">
        <div className='items-center'>
      <input className="w-80 p-4 m-4 bg-slate-200 text-black" type="text" placeholder="Titre Rendez-vous" /><br/>
      <input className="w-80 p-4 m-4 bg-slate-200" type="password" placeholder="Avec Qui?" /><br/>
      <input className="w-80 p-4 m-4 bg-slate-200" type="text" placeholder="Date Rendez-Vous" /><br/>
      <input className="w-80 p-4 m-4 bg-slate-200" type="password" placeholder="Heure Rendez-Vous" /><br/>
      <input className="w-80 p-4 m-4 bg-slate-200" type="password" placeholder="Lieu Rendez-Vous" /><br/>
        <Link to="/Dashboard/Mesrendezvous">
        <button className="bg-sky-500 text-white py-2 rounded-xl text-xl my-4 font-bold w-80">
          Valider
          </button>
          </Link>
      </div>
      </div>

</>
  )
}