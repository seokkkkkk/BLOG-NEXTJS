"use client";

import { Heart, Home, List, MessageSquare, Sun } from "lucide-react";
export const Footer = () => {
    return (
        <nav className="w-full fixed z-40 flex items-center justify-center bg-transparent px-5 mb-5 gap-3 bottom-0">
            <div className="flex gap-6 w-full px-6 items-center  h-[60px] bg-white/70 rounded-xl drop-shadow-layout">
                {/* <List /> */}
                <Home />
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                        <p className="font-bold text-xl">정윤석 기술 블로그</p>
                        {/* <p>소제목</p> */}
                    </div>
                    <div className="flex gap-4">
                        <MessageSquare />
                        <Heart />
                    </div>
                </div>
            </div>
            <div className="flex px-5 justify-between items-center  h-[60px] bg-white/70 rounded-xl drop-shadow-layout">
                <Sun />
            </div>
        </nav>
    );
};
