import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import EligibilitySection from "@/components/sections/Eligibility";

export default function Eligibility() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <EligibilitySection />
      </main>
      <Footer />
    </div>
  );
}