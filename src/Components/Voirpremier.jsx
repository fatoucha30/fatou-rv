import react from 'react'
import image1 from'../img/image1.png'
import {Link} from 'react-router-dom';
const Voirpremier = () => {
  return (
    //flex et grid c la meme chose mais ils ont une lègère différence
    <div className='flex items-center px-20 overflow-hidden'>
       <div>
         <h1 className='text-6xl'>Rendez-vous</h1>
         <p className='my-10'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nihil ducimus beatae,<br/> nesciunt perferendis doloremque exercitationem 
            quisquam, illo reiciendis,possimus eum minus  veritatis impedit quis fugit obcaecati rem doloribus fuga. Ullam.<br/>
        </p>
        <Link to="Connexion">
           <button className='bg-sky-600 py-2 rounded-xl text-2xl font-bold text-white p-4 w-full'>Commencer</button>
        </Link>
       </div>
       <div>
         <img src={image1}  className='w-500' alt=""/>
         <div className='relative button-14'>
            <div className='bg-sky-950 absolute right-3 rotate-45 w-50 h-48 rounded-xl'></div>
            <div className='bg-sky-600 absolute right-16 rotate-45 w-50 h-48 rounded-xl'></div>
         </div>
       </div>
    </div>
  )
}

export default Voirpremier
