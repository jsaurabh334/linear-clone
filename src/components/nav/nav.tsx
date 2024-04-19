"use client";

import Menu from "@/lib/svgs/menu";
import Image from "next/image";
import MobileMenu from "./mobile-menu";
import { useState } from "react";
import Close from "@/lib/svgs/close";

const Nav = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
            <nav className="backdrop-blur-md py-3 bg-[hsla(0,0%,100%,.01)] fixed inset-0 border-b border-[hsla(0,0%,100%,.08)] z-50 h-fit">
                <ul className="container-lg flex justify-between items-center">
                    <li className="flex gap-2 items-center">
                        <Image
                            src="/logo-assets/logo-light.png"
                            alt="Logo Light"
                            width={18}
                            height={18}
                        />
                        <h1 className="font-medium">Linear</h1>
                    </li>
                    <li className="text-sm cursor-pointer hidden lg:block">
                        Features
                    </li>
                    <li className="text-sm cursor-pointer hidden lg:block">
                        Method
                    </li>
                    <li className="text-sm cursor-pointer hidden lg:block">
                        Customers
                    </li>
                    <li className="text-sm cursor-pointer hidden lg:block">
                        Changelog
                    </li>
                    <li className="text-sm cursor-pointer hidden lg:block">
                        Pricing
                    </li>
                    <li className="text-sm cursor-pointer hidden lg:block">
                        Company
                    </li>
                    <li className="text-sm cursor-pointer hidden lg:block">
                        Contact
                    </li>
                    <li className="text-sm cursor-pointer flex-1 lg:flex-none text-right me-3 lg:me-0">
                        Login
                    </li>
                    <li className="text-sm me-5 lg:me-0">
                        <button className="bg-[#5e6ad2] rounded-full px-3 font-medium leading-8 h-8">
                            Sign up
                        </button>
                    </li>
                    <li
                        onClick={() => setShowMobileMenu((prev) => !prev)}
                        className="lg:hidden"
                    >
                        {showMobileMenu ? <Close /> : <Menu />}
                    </li>
                </ul>
            </nav>
            <MobileMenu show={showMobileMenu} />
        </>
    );
};

export default Nav;
