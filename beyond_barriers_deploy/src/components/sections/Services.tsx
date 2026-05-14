import { motion } from "framer-motion";
import { FileText, Compass, FolderOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    number: "01",
    icon: FileText,
    title: "Direct Paperwork Assistance",
    summary: "Hands-on help completing the forms and filings that stand between you and the support you need.",
    items: [
      "Benefit applications",
      "Document uploads",
      "Appeals organization",
      "Account access help",
      "Forms",
    ],
    color: "bg-accent/10 text-accent border-accent/20",
    accent: "text-accent",
  },
  {
    number: "02",
    icon: Compass,
    title: "Resource Navigation",
    summary: "Not sure where to turn? We help you identify the right program and show you how to reach it.",
    items: [
      "DSS",
      "Medicaid",
      "HEAP",
      "Food resources",
      "Legal aid referrals",
      "Housing resources",
    ],
    color: "bg-primary/10 text-primary border-primary/20",
    accent: "text-primary",
  },
  {
    number: "03",
    icon: FolderOpen,
    title: "Administrative Support",
    summary: "We help you organize the paperwork chaos so you can show up to appointments prepared and confident.",
    items: [
      "Evidence packets",
      "Document checklists",
      "Hardship letters",
      "Phone call prep",
    ],
    color: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    accent: "text-emerald-700 dark:text-emerald-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function Services() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold font-serif text-foreground mb-5">
              How we <span className="text-accent">help</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We meet people where they are — whether you need someone to sit with you and complete a form, or just need to know which door to knock on.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`rounded-2xl border bg-card p-8 flex flex-col gap-5 shadow-sm hover:shadow-lg transition-shadow duration-300`}
              data-testid={`card-pillar-${index}`}
            >
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${pillar.color}`}>
                  <pillar.icon className="w-6 h-6" />
                </div>
                <span className={`text-4xl font-bold font-serif opacity-20 ${pillar.accent}`}>{pillar.number}</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pillar.summary}</p>
              </div>

              <ul className="space-y-2 flex-grow">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${pillar.color.split(" ")[0].replace("/10", "/60")}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-5">
            We do not provide legal advice, legal representation, immigration services, or tax preparation.
          </p>
          <Button
            size="lg"
            onClick={() => handleScroll("#contact")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            data-testid="button-services-get-help"
          >
            Request an Appointment
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
