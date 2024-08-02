import React from "react";
import logo from "../img/RVS 1.png"
import { Link, Outlet } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <img src={logo} alt="image" />
        <nav>
          <ul className='flex'>
            <li>
              <Link to="/"> Accueil</Link>
            </li>
            <li className='mx-20'>
              <Link to="/Mesrendezvous">Mes Rendez Vous</Link>
            </li>
            <li>
              <Link to="/Moncompte">Mon Compte</Link>
            </li>
          </ul>
        </nav>

        <div>
          <Link to="/Seconnecter">
          <button className='bg-sky-500 p-4 rounded-lg text-white'>Se connecter</button>
          
          <button className='mx-10 bg-black p-4 rounded-lg text-white'>Se Déconnecter</button>
        </Link>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}
export default Navbar;