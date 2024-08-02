import React from 'react'
import { Link } from 'react-router-dom';
import { TopNav } from '../Components/Topnav';
import { FaUser } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import Barrecherche from '../Components/Barrecherche';


const Patient = () => {
  

  return(
    <>
    
  <div className="p-10 mx-20 ">
    <div className='flex justify-between'>
     <Barrecherche/> 
     <TopNav/>
     </div>
        <div className="flex justify-between items-center my-10">
        <h2 className="text-3xl font-bold">Mes patients</h2>


        <Link to="/Profil">
          <button>
            <FaCirclePlus className='text-xl font-bold text-green-300 mx-10' />
          </button>
        </Link>

      </div>
      <table className="table-auto w-full border-slate-500">
        <tbody>
        <tr>
        <td>
          <div className='flex justify-between gap-80 font-bold mx-1 my-4'>
             <h1>Prénom/Nom</h1>
             <h1 >Profil</h1>
          </div>
      </td>
      </tr>
          <tr>
            <td className="border-b-2 border-slate-600 h-full">
              <div className="flex gap-5 py-4 items-center mx-2">
                <span>
                  <FaUser />
                </span>
                <div className="flex flex-col">
                  <span className="text-sky-600 font-semibold gap-4">Moustapha Fall</span>
                </div>
              </div>
            </td>
            <td className="border-b-2  border-slate-600">
              <div className="flex items-end mx-10 flex-col">
               
                <button>
                  <span className="text-white text-xl font-bold  bg-green-700">
                   VOIR
                  </span>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border-b-2 border-slate-600">
              <div className="flex gap-5 py-4 items-center">
                <span>
                  <FaUserFriends />
                </span>
                <div className="flex flex-col">
               
                  <span className="text-sky-600 font-semibold">Alimatou Seck</span>
                </div>
              </div>
            </td>
            <td className="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
               
                <button>
                  <span className="text-white text-xl font-bold mx-10 bg-green-700">
                    VOIR
                  </span>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border-b-2 border-slate-600">
              <div className="flex gap-5 py-4 items-center">
                <span>
                  <FaUsers />
                </span>
                <div className="flex flex-col">
                  
                  <span className="text-sky-600 font-semibold flex justify-between">Pathé Fall</span>
                </div>
              </div>
            </td>
            <td className="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
               <Link to="/Voir" >
                <button>
                  <span className="text-white text-xl font-bold bg-green-500 mx-10">
                   VOIR
                  </span>
                </button>
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border-b-2 border-slate-600">
              <div className="flex gap-5 py-4 items-center ">
                <span>
                  <FaUserAlt />
                </span>
                <div className="flex flex-col ">                
                  <span className="text-sky-600 font-semibold ">Cheikh Barre Diop</span>
                </div>
              </div>
            </td>
            <td className="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
                
                <button>
                  <span className="text-white text-xl font-semibold bg-green-700 mx-10">
                   VOIR
                  </span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Patient

