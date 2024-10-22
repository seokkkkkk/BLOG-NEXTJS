import type { Metadata } from "next";
import localFont from "next/font/local";
import "../config/globals.css";
import { ThemeProvider } from "@/layouts/theme/ThemeProvider";
import { Header } from "@/layouts/Header";
import { Footer } from "@/layouts/Footer";

const rose = localFont({
    src: "../fonts/rose.ttf",
    display: "swap",
    variable: "--font-rose",
});

export const metadata: Metadata = {
    title: "SEOK's Tech Blog",
    description: "Frontend Developer, seokkkkkk's tech blog",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body
                className={`${rose.variable} font-rose antialiased bg-slate-400 box-border`}
            >
                <ThemeProvider>
                    <Header />
                    <Footer />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
