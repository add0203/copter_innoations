"use client";
import Link from "next/link";
import * as React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "../ui/button";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import ModeToggle from "../mode-toggle";

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import { Dialog, DialogClose } from "@radix-ui/react-dialog";

export default function NavBar() {
  return (
    <div className="flex min-w-full fixed justify-between p-2 border-b z-10 bg-gray-300 bg-opacity-60 dark:bg-black dark:bg-opacity-60 ">
      {/* For Mobile Hamburger Menu */}
      <div className="flex justify-between w-full min-[825px]:hidden">
        <Dialog>
          <SheetTrigger className="p-2 transition">
            <Button
              size="icon"
              variant="ghost"
              className="w-4 h-4"
              aria-label="Open menu"
              asChild
            >
              <GiHamburgerMenu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Copter Innovations</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem]">
              <DialogClose asChild>
                <Link href="/" passHref>
                  <Button variant="outline" className="w-full">
                    Home
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/products" passHref>
                  <Button variant="outline" className="w-full">
                    Products
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/contact" passHref>
                  <Button variant="outline" className="w-full">
                    Contact
                  </Button>
                </Link>
              </DialogClose>
            </div>
          </SheetContent>
        </Dialog>
      </div>

      <NavigationMenu>
        <NavigationMenuList className="max-[825px]:hidden flex gap-3 w-[100%] justify-between">
          <div className="flex items-center gap-4">
            {/* Home Button */}
            <Link href="/" passHref>
              <Button variant="ghost">Home</Button>
            </Link>

            {/* Products Button */}
            <Link href="/products" passHref>
              <Button variant="ghost">Products</Button>
            </Link>

            {/* Contact Us Button */}
            <Link href="/contact" passHref>
              <Button variant="ghost">Contact Us</Button>
            </Link>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </div>
  );
}

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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground hover:font-bold focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-base font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
