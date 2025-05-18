"use client";

import Link from "next/link";
import { ThemeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="border-b py-4">
      <div className="container mx-auto hidden lg:flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Inventory Management
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link
            href="/dashboard"
            className="hover:text-primary transition-colors"
          >
            Dashboard
          </Link>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="container mx-auto lg:hidden flex  items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link
            href="/dashboard"
            className="hover:text-primary transition-colors"
          >
            Dashboard
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
