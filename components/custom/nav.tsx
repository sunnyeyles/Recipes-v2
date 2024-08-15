import { UserButton } from '@clerk/nextjs'
import { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import crab from '../../assets/crab-svgrepo-com.svg'

type NavProps = {
  children?: ReactNode
}
export const Nav = ({ children }: NavProps) => {
  return (
    <nav className="flex gap-12 items-end flex-wrap justify-between p-6 shadow-xl w-full">
      <ul className="flex gap-12 items-end text-md">
        <Image
          src={crab}
          alt="crab logo"
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
        <Link href="about">
          <li className="hover:underline hover:cursor-pointer">About</li>
        </Link>
        <Link href="upload-recipe">
          <li className="hover:underline hover:cursor-pointer">
            Upload Recipe
          </li>
        </Link>
      </ul>
      {children}
      <UserButton />
    </nav>
  )
}
export default Nav
