import React from "react";
import { Link } from "react-router-dom";
import { SlSocialGoogle } from "react-icons/sl";

export const Inscrire = () => {
    return (
        <div className="flex">
            <div className="w-1/4 h-screen"></div>
            <div className="flex flex-col justify-start items-center w-2/4">
                <h2 className="text-6xl font-bold">S'inscrire</h2>
                <input className="w-full p-4 m-4 bg-slate-300" type="text" placeholder="Nom" />
                <input className="w-full p-4 m-4 bg-slate-300" type="password" placeholder="Prenom" />
                <input className="w-full p-4 m-4 bg-slate-300" type="text" placeholder="Adresse mail" />
                <input className="w-full p-4 m-4 bg-slate-300" type="password" placeholder="Mot de passe" />
                <Link to="/connexion" className="w-full">
                    <button className="bg-sky-500 text-white py-2 rounded-xl text-xl my-4 font-bold w-full">
                        S'inscrire
          </button>
                </Link>
                <Link to="/dashboard/Mesrv" className="w-full">
                    <button className="bg-black  my-5 flex items-center justify-center text-white py-2 rounded-xl text-xl font-bold w-full">
                        Continuer avec Google
            <SlSocialGoogle className="mx-5" />
                    </button>
                </Link>
               

            </div>
            <div className="w-1/4 h-screen"></div>
        </div>
    );
};