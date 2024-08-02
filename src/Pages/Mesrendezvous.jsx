import react from 'react';
import { FaUser } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { TopNav } from '../Components/Topnav';
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Barrecherche from '../Components/Barrecherche';
import {RV} from '../Components/RV';

export const Mesrendezvous = () => {

  const date = new Date().toDateString();
  const heure = new Date().toLocaleTimeString();

  
  return (
    <div className="p-12 mx-20">
    <div className='flex justify-between'>
      <Barrecherche/> 
      <TopNav/>
     
      </div>
      <div className="flex justify-between items-center my-10">
        <h2 className="text-3xl font-bold">Mes Rendez-vous</h2>

        
        <Link to="/RV">
          <button>
          <FaCirclePlus className='text-3xl font-bold text-sky-200' />
          </button>
          </Link>
       
      </div>
      <table className="table-auto w-full border-slate-500">
        <tbody>
          <tr>
            <td className="border-b-2 border-slate-600">
              <div className="flex gap-5 py-4 items-center">
                <span>
                  <FaUser /> 
                </span>
                <div className="flex flex-col">
                  <span>{date}</span>
                  <span className="text-sky-600 font-semibold">Moussa Ba</span>
                </div>
              </div>
            </td>
            <td className="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
                <span>{heure}</span>
                <button>
                  <span className="text-sky-600 text-2xl font-semibold">
                  {/*<IoIosArrowForward />*/}  
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
                  <span>{date}</span>
                  <span className="text-sky-600 font-semibold">Equipe xarala</span>
                </div>
              </div>
            </td>
            <td className="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
                <span>{heure}</span>
                <button>
                  <span className="text-sky-600 text-2xl font-semibold">
                   {/*<IoIosArrowForward />*/} 
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
                  <span>{date}</span>
                  <span className="text-sky-600 font-semibold">Reunion d affaire</span>
                </div>
              </div>
            </td>
            <td className="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
                <span>{heure}</span>
                <button>
                  <span className="text-sky-600 text-2xl font-semibold">
                   {/*<IoIosArrowForward />*/} 
                  </span>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border-b-2 border-slate-600">
              <div className="flex gap-5 py-4 items-center">
                <span>
                  <FaUserAlt />
                </span>
                <div className="flex flex-col">
                  <span>{date}</span>
                  <span className="text-sky-600 font-semibold">Pathe Fall</span>
                </div>
              </div>
            </td>
            <td className="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
                <span>{heure}</span>
                <button>
                  <span className="text-sky-600 text-2xl font-semibold">
                   {/* <IoIosArrowForward />*/}
                  </span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
