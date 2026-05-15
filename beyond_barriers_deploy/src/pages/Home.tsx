import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Services } from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}