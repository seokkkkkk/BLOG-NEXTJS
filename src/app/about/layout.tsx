export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-white/70 rounded-xl drop-shadow-layout p-4 h-full overflow-y-auto">
            {children}
        </div>
    );
}
