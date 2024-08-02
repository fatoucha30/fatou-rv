import React from 'react'
import { FaBell } from "react-icons/fa6";
import userphoto from "../img/user.png";
import Card from "../Components/Card";

const Acceuil = () => {
  const table = [
    {
      className: "bg-sky-700 p-10",
      number: "98",
      text: "Liste des rendez-vous",
    },
    {
      className: "bg-green-700 p-10",
      number: "62",
      text: "Liste des patients",
    },
    {
      className: "bg-purple-700 p-10",
      number: "98",
      text: "Liste des rendez-vous",
    },
    {
      className: "bg-sky-700 p-10",
      number: "62",
      text: "Liste des patients",
    },
  ];
  return (
    <div className="p-14">
      <div className="flex justify-between gap-5">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold text-sky-600">Bienvenu! Docteur</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem, aspernatur error! Nisi voluptatum omnis, a unde soluta
              perferendis nam iste alias nulla tempore in eligendi ipsa magnam vel
            minima impedit?</p>
        </div>
        <div className="flex items-center gap-3">
          <FaBell className="text-3xl" />
          <img className="w-14" src={userphoto} alt="user" />
        </div>
      </div>
      <h2 className="text-7xl my-5">Rendez-Vous</h2>
      <div className="grid grid-cols-2 gap-5">
        {table.map((item) => {
          return (
            <Card
              className={item.className}
              number={item.number}
              text={item.text}
            />
          );
        })}

      </div>
    </div>
  )
}

export default Acceuil
