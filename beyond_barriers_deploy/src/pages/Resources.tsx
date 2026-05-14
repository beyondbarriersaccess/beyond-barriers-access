import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import ResourcesSection from "@/components/sections/Resources";

export default function Resources() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
}