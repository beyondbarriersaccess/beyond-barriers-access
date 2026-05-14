import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Eligibility } from "@/components/sections/Eligibility";

export default function EligibilityPage() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <Eligibility />
      </main>
      <Footer />
    </div>
  );
}