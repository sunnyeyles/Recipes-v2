import { UserButton } from "@clerk/nextjs";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import donut from "../../donut-svgrepo-com.svg";
import crab from "../../crab-svgrepo-com.svg";
import { RiLayoutGridLine } from "react-icons/ri";
import { RiLayoutRowLine } from "react-icons/ri";
type NavProps = {
  children?: ReactNode;
};
export const Nav = ({ children }: NavProps) => {
  return (
    <nav className="flex gap-12 items-end flex-wrap justify-between p-6 shadow-xl w-full">
      <ul className="flex gap-12 items-end text-lg text-gray-600">
        <Image
          src={crab}
          alt="donut logo"
          className="w-12 hover:animate-bounce"
        />

        <Link href="recipes">
          <li className="hover:underline hover:cursor-pointer">
            Search Recipes
          </li>
        </Link>
        <Link href="liked-recipes">
          <li className="hover:underline hover:cursor-pointer">
            Liked Recipes
          </li>
        </Link>
        <li className="hover:underline hover:cursor-pointer">Explore</li>
        <Link href="about">
          <li className="hover:underline hover:cursor-pointer">About</li>
        </Link>
      </ul>
      {children}
      <UserButton />
    </nav>
  );
};
export default Nav;
