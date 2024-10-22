"use client";

import { Github, Search } from "lucide-react";
export const Header = () => {
    return (
        <nav className="w-full fixed z-40 flex items-center justify-center bg-transparent px-5 mt-5 gap-3">
            <div className="flex gap-6 w-full px-6 items-center  h-[60px] bg-white/70 rounded-xl">
                <h1 className="font-semiBold text-4xl ">SEOK</h1>
                <div className="flex justify-between items-center w-full ">
                    <ul className="flex gap-3 text-xl font-semiBold">
                        <li>about</li>
                        <li>posts</li>
                    </ul>
                    <div className="flex gap-5">
                        <Search />
                        <Github />
                    </div>
                </div>
            </div>
        </nav>
    );
};
