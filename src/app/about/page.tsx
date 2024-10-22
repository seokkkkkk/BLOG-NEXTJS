"use client";

import axios from "axios";
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
            {profileImageUrl && (
                <Image
                    src={profileImageUrl}
                    alt="profile"
                    width={200}
                    height={200}
                    className="rounded-2xl"
                />
            )}
        </div>
    );
}
