import Navbar from "./shared/components/Navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//Don't have DIN Pro font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "DHNN | Fullstack challenge",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
