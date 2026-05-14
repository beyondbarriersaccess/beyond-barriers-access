import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Meeting people where they are — without judgment.",
  "Plain language, always.",
  "No one turned away due to complexity.",
  "Community-centered, appointment-based support."
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold font-serif text-foreground mb-6">
              We started here because{" "}
              <span className="text-accent">we needed this too.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Beyond Barriers Access was created to help individuals and families who feel overwhelmed by paperwork, administrative systems, and barriers to essential services.
              </p>
              <p>
                We know what it feels like not to know where to start. That experience is why this initiative exists. We sit with people, help them understand what is being asked of them, and work through it together — step by step.
              </p>
              <p>
                We are a founder-led community assistance initiative, currently building our local support network in the Hudson Valley. We are now accepting inquiries and offering services by appointment.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {values.map((value, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden h-64 bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
                  alt="People working together on paperwork"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=600&q=80"
                  alt="Community resource session"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden h-48 bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80"
                  alt="Document assistance session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-64 bg-accent/10 p-6 flex items-end">
                <p className="font-serif font-bold text-2xl text-primary">
                  You should not have to figure this out alone.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
