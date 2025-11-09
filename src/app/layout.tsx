import type { Metadata } from "next";
import "./globals.css";
import Signup from "../components/Signup";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"], 
});


export const metadata: Metadata = {
  title: "My Next App",
  description: "A simple Next.js + TypeScript setup",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        
        </body>
      
    </html>
  );
}
