import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import LoginButton from "./LoginButton"
import { getServerSession } from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const user = await getServerSession(authOptions);
  console.log('user',user);
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Link className="linkTag" href={"/"}>HOME</Link>
        <Link className="linkTag" href={"/list"}>LIST</Link>
        <Link className="linkTag" href={"/write"}>글쓰기</Link>
        {
          user === null ? <LoginButton status="로그인"></LoginButton> : <LoginButton status="로그아웃"></LoginButton>
        }
        
        {children}
      </body>
    </html>
  );
}
