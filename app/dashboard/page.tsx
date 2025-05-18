import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return notFound();
  }

  const user = session.user;
  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard Page</h1>
    </div>
  );
}
