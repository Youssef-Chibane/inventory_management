import Link from "next/link";
import SignOutButton from "@/components/Signout";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { ModeToggle } from "./ModeToggle";

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <Link href="/" className="text-2xl font-bold">
        Inventory Management
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        {session ? (
          <SignOutButton />
        ) : (
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
