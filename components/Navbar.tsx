import Link from "next/link";
import { ThemeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center py-4">
        <Link href={"/"} className="text-2xl font-bold">
          Inventory Management
        </Link>

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
    </nav>
  );
};

export default Navbar;
