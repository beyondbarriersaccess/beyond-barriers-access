import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Eligibility } from "@/components/sections/Eligibility";
import { Resources } from "@/components/sections/Resources";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Services />
        <Eligibility />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
