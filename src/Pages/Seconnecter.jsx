import react from 'react'
import { SlSocialGoogle } from "react-icons/sl";
import { Link } from "react-router-dom"

const Seconnecter = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/4 h-screen "></div>
        <div className="flex flex-col justify-center items-center w-2/4">
          <h2 className="text-5xl">Se connecter</h2>
          <input className="w-full border-2 border-sky-500 rounded-xl p-3 my-3" type="text" placeholder="entrer votre nom" />
          <input className="w-full border-2 border-sky-500 rounded-xl p-3 my-3" type="password" placeholder="entrer votre mot de passe" />
          
          <button className='bg-sky-600 text-white py-2 rounded-xl text-xl font-bold  p-4 w-full'>
            <Link to="/Dashboard">
              Se connecter
                    </Link>
          </button>
          <button className='bg-black my-4 text-white py-2 rounded-xl text-xl font-bold p-4 w-full'>
            <Link to="/Dashboard" className='flex justify-center items-center'>
              continuer avec Google
                        <SlSocialGoogle className="mx-7" />
            </Link>
          </button>

        </div>
        <div className="w-1/4 h-screen" ></div>
      </div>
    </div>
  )
}

export default Seconnecter
