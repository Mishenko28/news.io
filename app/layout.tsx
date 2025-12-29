import type { Metadata } from "next";
import "./globals.css";
import Header from "./(root)/Header";

export const metadata: Metadata = {
    title: "News.io",
    description: "A simple news app built with Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`antialiased dark`}
            >
                <div className="flex flex-col gap-2 sm:gap-4 w-full p-1 sm:p-4">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}
