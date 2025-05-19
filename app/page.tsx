import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto mt-30 px-4 text-center flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        Efficient Inventory Management System
      </h1>
      <p className="text-lg md:text-xl max-w-3xl text-muted-foreground">
        Streamline your inventory process with our powerful and intuitive
        management solution. Track, manage, and optimize your inventory in
        real-time.
      </p>
      <Button asChild>
        <Link href={"/dashboard"}>Get started</Link>
      </Button>
    </div>
  );
}
