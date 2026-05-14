import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/About";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}