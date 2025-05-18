"use client";

import { signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

export default function AuthButton() {
  const { data: session } = useSession();

  const router = useRouter();
  const handleClick = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          router.refresh();
        },
      },
    });
  };

  return (
    <>
      {session ? (
        <Button asChild>
          <div
            onClick={handleClick}
            className="flex items-center justify-between w-18 cursor-pointer"
          >
            Log out
          </div>
        </Button>
      ) : (
        <Button>
          <Link href={"/login"}>Log in</Link>
        </Button>
      )}
    </>
  );
}
