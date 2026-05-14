import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Resources } from "@/components/sections/Resources";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <Resources />
      </main>
      <Footer />
    </div>
  );
}