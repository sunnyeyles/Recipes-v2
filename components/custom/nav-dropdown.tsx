"use client";
import * as React from "react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { PiHamburgerBold } from "react-icons/pi";
type NavProps = {
  children?: ReactNode;
};

export const NavDropDown = ({ children }: NavProps) => {
  return (
    <div className="flex shadow-xl">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="p-8 flex">
              <PiHamburgerBold className="text-xl m-4" />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-screen">
              <ul className="w-screen">
                <ListItem href="/recipes" title="Search Recipes">
                  Generate your own recipes given a keywords or ingredients
                </ListItem>
                <ListItem href="/liked-recipes" title="Liked Recipes">
                  View your liked recipes
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="About">
                  All about the project
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="">{children}</div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
