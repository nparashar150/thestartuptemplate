import { Icons } from "@repo/ui/components/icons";
import { buttonVariants } from "@repo/ui/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@repo/ui/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@repo/ui/components/ui/sheet";
import Link from "next/link";
import { FC, useState } from "react";
import type { Navbar as NavbarProps } from "../../types";
import ThemeToggle from "./ThemeToggle";

const Navbar: FC<NavbarProps> = ({ leftLinks = [], centerLinks = [], rightLinks = [] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            {leftLinks?.map(({ href = "", label, target, icon }) => {
              const Icon = icon && Icons?.[icon];
              return (
                <Link key={label} href={href} target={target} className="ml-2 font-bold text-lg inline-flex justify-center items-center gap-2">
                  {Icon && <Icon className="w-5 h-5" />}
                  {label}
                </Link>
              );
            })}
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2 w-fit inline-flex justify-center items-center gap-2">
                <ThemeToggle />
                <Icons.menu className="flex md:hidden h-5 w-5" onClick={() => setIsOpen(true)}>
                  <span className="sr-only">Menu Icon</span>
                </Icons.menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">The Startup</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {centerLinks?.map(({ href = "", label, target }) => (
                    <Link key={label} href={href} target={target} className={buttonVariants({ variant: "ghost" })}>
                      {label}
                    </Link>
                  ))}
                  {rightLinks?.map(({ href = "", label, icon, target }) => {
                    const Icon = icon && Icons?.[icon];
                    return (
                      <Link key={label} href={href} target={target} className={`w-[110px] border ${buttonVariants({ variant: "secondary" })}`}>
                        {Icon && <Icon className="mr-2 w-5 h-5" />}
                        {label}
                      </Link>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {centerLinks?.map(({ href = "", label, target }) => (
              <Link
                key={label}
                href={href}
                target={target}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            {rightLinks?.map(({ href = "", label, icon, target }) => {
              const Icon = icon && Icons?.[icon];
              return (
                <Link key={label} href={href} target={target} className={`border ${buttonVariants({ variant: "secondary" })}`}>
                  {Icon && <Icon className="mr-2 w-5 h-5" />}
                  {label}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;
