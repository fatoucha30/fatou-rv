import React from 'react'
import userphoto from "../img/user.png";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineCreate } from "react-icons/md";
import { Link } from "react-router-dom"


{/*export const Voir = () => {
  return (
    <>
    
    
    <div className='mx-80 py-8'>
      <input className="w-full p-4 m-4 bg-slate-200 text-black" type="text" placeholder="Titre Rendez-vous" />
      <input className="w-full p-4 m-4 bg-slate-200" type="password" placeholder="Avec Qui?" />
      <input className="w-full p-4 m-4 bg-slate-200" type="text" placeholder="Date Rendez-Vous" />
      <input className="w-full p-4 m-4 bg-slate-200" type="password" placeholder="Heure Rendez-Vous" />
      <input className="w-full p-4 m-4 bg-slate-200" type="password" placeholder="Lieu Rendez-Vous" />
       
       </div>
      <div className='justify-center  my-20'>
         <div className='flex justify-center'>
           Prénom: Pathé
           <MdOutlineCreate className='mx-20'/>
          </div>
        <div className='flex justify-center' >
        Nom: Fall
        <MdOutlineCreate className='mx-20'/>
        </div>
        <div className='flex justify-center'>
        Age: 22ans
        <MdOutlineCreate className='mx-20'/>
        </div>
        <div className='flex justify-center' >
        Adresse: Cité Senghor
        <MdOutlineCreate className='mx-20'/>
        </div>
        <div className='flex justify-center' >
        Téléphone: 785918968
        <MdOutlineCreate className='mx-20'/>
        </div>
        <div className='flex justify-center'>
          <Link to="/Dashboard">
          <button className=" bg-sky-500 text-white py-2 rounded-xl text-xl my-20 font-bold w-80">
          Enregistrer
          </button>
          </Link>
          </div>
       </div>*/}
     
      export const Voir = () => {
       const user = {
         prenom: 'Pathé',
        nom: 'FALL',
         age: '22 ans',
          adresse: 'Cité Senghor',
           telephone: '+221 785918968' };
       return( 
         <>
         <div className='flex justify-center '>
             <FaCircleUser className= 'mx-auto my-2 w-40 h-40 text-sky-400' />
        </div>
           <div className='justify-center my-20 mx-auto'
           style={{ border: '3px solid black', padding: '30px', width: '300px' }}>
            <p className=' justify-between'>
              Prénom: {user.prenom}
               <MdOutlineCreate className='mx-60' />
            </p> 
            <p>
              Nom: {user.nom}
               <MdOutlineCreate className='mx-60' />
              </p>
            <p>
              Âge: {user.age}
               <MdOutlineCreate className='mx-60' />
              </p>
            <p>
              Adresse: {user.adresse}
               <MdOutlineCreate className='mx-60' />
              </p> 
            <p>
              Téléphone: {user.telephone}
               <MdOutlineCreate className='mx-60' />
              </p>
          </div>
           <div className='flex justify-center'>
             <Link to="/Dashboard/Patient">
               <button className=" bg-sky-500 text-white py-2 rounded-xl text-xl my-20>
 font-bold w-80">
                 Enregistrer
          </button>
             </Link>
           </div>

</>
  )
}