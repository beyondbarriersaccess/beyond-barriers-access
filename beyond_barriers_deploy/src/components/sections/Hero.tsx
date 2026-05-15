import { motion } from "framer-motion";
import { ArrowRight, Heart, Leaf, MapPin, Sprout } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[45%] h-[45%] rounded-full bg-primary/5" />
        <div className="absolute bottom-[10%] -left-[10%] w-[35%] h-[35%] rounded-full bg-accent/5" />

        <Leaf className="absolute right-[8%] top-[18%] w-24 h-24 text-primary/10 rotate-12" />
        <Leaf className="absolute left-[5%] bottom-[18%] w-20 h-20 text-accent/10 -rotate-12" />
        <Heart className="absolute right-[18%] bottom-[16%] w-16 h-16 text-accent/15" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-8 border border-primary/10">
              <MapPin className="w-4 h-4" />
              <span>Hudson Valley &amp; Westchester</span>
            </div>

            <div className="mb-6 inline-flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Heart className="w-7 h-7 text-accent fill-accent/20" />
              </div>
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Sprout className="w-7 h-7 text-primary" />
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif text-foreground leading-[1.1] mb-6">
              You don&apos;t have to navigate it{" "}
              <span className="text-accent">alone.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Beyond Barriers Access helps Hudson Valley and Westchester
              residents navigate paperwork, organize documents, and connect with
              essential community resources.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="text-base h-13 px-7 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md"
                >
                  Get Help
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <Link href="/resources">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base h-13 px-7 border-primary/30 hover:bg-primary/5 font-semibold"
                >
                  Find Resources
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-base h-13 px-7 font-semibold text-foreground/70 hover:text-foreground"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Services by appointment only — now accepting inquiries.
            </p>
          </motion.div>

          <motion.div className="relative h-[500px] lg:h-[620px] max-w-[520px] mx-auto rounded-3xl overflow-hidden shadow-xl border border-primary/10 bg-card">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1f5c3f] via-[#234f39] to-[#b55a32]" />

            <div className="absolute top-6 right-6 z-20 flex gap-3">
              <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center shadow-md">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center shadow-md">
                <Heart className="w-6 h-6 text-accent fill-accent/20" />
              </div>
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
              <img
                src="/branding/beyond-barriers-card.png"
                alt="Beyond Barriers Access"
                className="w-[85%] max-w-[420px] h-auto drop-shadow-md"
              />

              <div className="absolute bottom-8 left-8 right-8">
                <blockquote className="text-background text-2xl font-serif italic leading-snug">
                  You don&apos;t have to navigate it alone.
                </blockquote>
                <p className="text-background/80 mt-3 text-lg">
                  Here to help. Here for our community.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}