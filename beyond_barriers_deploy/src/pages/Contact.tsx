import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import ContactSection from "@/components/sections/Contact";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}