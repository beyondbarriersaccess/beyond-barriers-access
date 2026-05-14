import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-8">
              <MapPin className="w-4 h-4" />
              <span>Hudson Valley &amp; Westchester</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif text-foreground leading-[1.1] mb-6">
              You shouldn't have to face complicated systems{" "}
              <span className="text-accent">alone.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Beyond Barriers Access helps Hudson Valley and Westchester residents navigate paperwork, organize documents, and connect with essential community resources.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="text-base h-13 px-7 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md"
                onClick={() => handleScroll("#contact")}
                data-testid="button-get-help"
              >
                Get Help
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base h-13 px-7 border-primary/20 hover:bg-primary/5 font-semibold"
                onClick={() => handleScroll("#resources")}
                data-testid="button-find-resources"
              >
                Find Resources
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-base h-13 px-7 font-semibold text-foreground/70 hover:text-foreground"
                onClick={() => handleScroll("#contact")}
                data-testid="button-contact-us"
              >
                Contact Us
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Services by appointment only &mdash; now accepting inquiries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[580px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent mix-blend-multiply z-10" />
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Person getting help with paperwork"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black/80 to-transparent">
              <blockquote className="text-white text-xl font-serif italic">
                "Everyone deserves access to the resources they need — without barriers."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
