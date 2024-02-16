import { UserButton } from "@clerk/nextjs";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import donut from "../../donut-svgrepo-com.svg";
import crab from "../../crab-svgrepo-com.svg";
import { Button } from "../ui/button";
type NavProps = {
  children: ReactNode;
};
export const Nav = ({ children }: NavProps) => {
  return (
    <nav className="flex gap-12 items-end flex-wrap justify-between p-6 shadow-xl">
      <ul className="flex flex-wrap gap-12 items-end">
        <Image
          src={crab}
          alt="donut logo"
          className="w-12 hover:animate-bounce"
        />
        <Link href="recipes">
          <li className="hover:underline hover:cursor-pointer">my recipes</li>
        </Link>
        <Link href="liked-recipes">
          <li className="hover:underline hover:cursor-pointer">liked</li>
        </Link>
        <li className="hover:underline hover:cursor-pointer">explore</li>
        <li className="hover:underline hover:cursor-pointer">about</li>
      </ul>
      {children}
      <UserButton />
    </nav>
  );
};
export default Nav;
