import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Efficient Inventory Management System
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Streamline your inventory process with our powerful and intuitive
              management solution. Track, manage, and optimize your inventory in
              real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/dashboard">Get Started</Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden bg-muted flex items-center justify-center">
            {/* Placeholder for hero image - replace with your actual image */}
            <div className="text-4xl font-bold text-muted-foreground">
              Inventory Dashboard Preview
            </div>
            {/* If you have an image, uncomment this:
            <Image
              src="/hero-image.jpg"
              alt="Inventory Management Dashboard"
              fill
              className="object-cover"
              priority
            />
            */}
          </div>
        </div>
      </section>
    </div>
  );
}
