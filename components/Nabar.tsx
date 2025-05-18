import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ModeToggle";
import AuthButton from "@/components/authButton";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-4 border-b">
      <Link href="/" className="text-2xl font-bold">
        Inventory Management
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <AuthButton />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
