import React from "react";
import imgUser from "../img/user.png";
import { IoIosNotifications } from "react-icons/io";

export const TopNav = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
                <IoIosNotifications />
                <img src={imgUser} className="w-6" alt="" />

            </div>
        </div>
    );
};