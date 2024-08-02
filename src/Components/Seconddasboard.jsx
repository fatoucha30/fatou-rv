import React from "react";
import { Secondsidebar } from "./Secondsidebar";
import { Outlet } from "react-router-dom";

export const Seconddashboard = () => {
    return (
        <div className="flex">
            <section className="w-1/5 bg-sky-300 h-screen">
                <Secondsidebar />
            </section>
            <section className="w-4/5 h-screen">
                <Outlet />
            </section>
        </div>
    );
};