import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="flex justify-between px-5 h-[50px] bg-gray-200">Airport
            <Link to="/auth">Auth</Link>
        </nav>
    )
}