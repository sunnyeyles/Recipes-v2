import { UserButton } from "@clerk/nextjs";
import { ReactNode } from "react";
type NavProps = {
  children: ReactNode;
};
export const Nav = ({ children }: NavProps) => {
  return (
    <div>
      <nav className="flex flex-wrap justify-between p-6 shadow-xl">
        <h1>Recipes</h1>
        {children}
        <UserButton />
      </nav>
    </div>
  );
};
export default Nav;
