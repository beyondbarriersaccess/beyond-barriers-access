import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, MapPin } from "lucide-react";

const criteria = [
  "You live in Hudson Valley or Westchester County, New York",
  "Your household income is at or below 300% of the Federal Poverty Level, OR you have a documented hardship",
];

const counties = [
  "Dutchess County",
  "Orange County",
  "Putnam County",
  "Rockland County",
  "Sullivan County",
  "Ulster County",
  "Westchester County",
];

export function Eligibility() {
  return (
    <section id="eligibility" className="py-24 bg-white dark:bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-bold font-serif text-foreground mb-4">
              Who we <span className="text-accent">serve</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our services are currently available to residents in the following areas who meet our eligibility guidelines.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-accent/5 border border-accent/20 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                Eligibility Requirements
              </h3>
              <ul className="space-y-4">
                {criteria.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                Not sure if you qualify? Reach out anyway — we will do our best to connect you with the right resource.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary/5 border border-primary/20 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                Service Area
              </h3>
              <ul className="space-y-3">
                {counties.map((county, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{county}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex items-start gap-3 bg-muted rounded-xl p-5 text-sm text-muted-foreground"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-foreground/40" />
            <p>
              Beyond Barriers Access does not provide legal advice, legal representation, immigration services, or tax preparation. We provide paperwork assistance and resource navigation only.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
