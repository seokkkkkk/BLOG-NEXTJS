"use client";

import axios from "axios";
import { Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutPage() {
    const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get("https://api.github.com/users/seokkkkkk")
            .then((res) => {
                setProfileImageUrl(res.data.avatar_url);
            })
            .catch(() => {
                setProfileImageUrl("../icon.png");
            });
    }, []);

    return (
        <div>
            <div>
                {profileImageUrl && (
                    <Image
                        src={profileImageUrl}
                        alt="profile"
                        width={200}
                        height={200}
                        className="rounded-2xl"
                    />
                )}
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="font-normal text-2xl">
                            정윤석(seokkkkkk)
                        </h1>
                        <Github width={20} height={20} />
                    </div>
                    <p>서울과학기술대학교</p>
                    <p>컴퓨터공학과</p>
                </div>
            </div>
        </div>
    );
}
