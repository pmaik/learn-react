import React from "react";
import { Outlet } from "react-router-dom";

function ReactComp() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-10 underline">
                Welcome to my React page
            </h1>
            <Outlet />
        </div>
    );
}

export default ReactComp;
