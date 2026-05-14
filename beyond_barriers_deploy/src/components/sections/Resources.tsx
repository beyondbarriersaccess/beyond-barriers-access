import { motion } from "framer-motion";
import { ExternalLink, Printer, Utensils, Home, Zap, HeartPulse, DollarSign, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Food Assistance",
    icon: Utensils,
    color: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
    resources: [
      {
        title: "Food Bank of the Hudson Valley",
        desc: "Connects residents to food pantries, soup kitchens, and emergency food programs across the region.",
        url: "https://www.feedingamerica.org/find-your-local-foodbank",
        phone: "211",
      },
      {
        title: "SNAP (Food Stamps) — NY Benefits",
        desc: "Apply online for the Supplemental Nutrition Assistance Program through New York State.",
        url: "https://www.mybenefits.ny.gov",
        phone: "1-800-342-3009",
      },
      {
        title: "211 NY — Food Finder",
        desc: "Dial or text 211 to find the closest food pantry, hot meal site, or emergency food program near you.",
        url: "https://www.211nys.org",
        phone: "211",
      },
    ],
  },
  {
    name: "Housing Help",
    icon: Home,
    color: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    resources: [
      {
        title: "Legal Services of the Hudson Valley",
        desc: "Free civil legal help for low-income residents, including eviction defense and housing rights.",
        url: "https://www.lshv.org",
        phone: "1-800-724-0490",
      },
      {
        title: "Westchester Residential Opportunities (WRO)",
        desc: "Fair housing counseling, rental assistance referrals, and housing discrimination support.",
        url: "https://www.wroinc.org",
        phone: "(914) 428-4507",
      },
      {
        title: "NY State Homes & Community Renewal",
        desc: "State programs for rental assistance, affordable housing, and home repair grants.",
        url: "https://www.hcr.ny.gov",
        phone: "1-800-432-4210",
      },
      {
        title: "Emergency Rental Assistance — OTDA",
        desc: "NY State Office of Temporary and Disability Assistance emergency rental programs.",
        url: "https://otda.ny.gov/programs/emergency-rental-assistance/",
        phone: "1-800-342-3009",
      },
    ],
  },
  {
    name: "Utilities",
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
    resources: [
      {
        title: "HEAP — Home Energy Assistance Program",
        desc: "Helps low-income households pay heating and utility bills. Apply through your local county DSS office.",
        url: "https://otda.ny.gov/programs/heap/",
        phone: "1-800-342-3009",
      },
      {
        title: "Central Hudson Energy Assistance",
        desc: "Payment plans, low-income rate discounts, and assistance programs for Central Hudson customers.",
        url: "https://www.centralhudson.com/assistance",
        phone: "1-845-452-2700",
      },
      {
        title: "Lifeline — Discounted Phone Service",
        desc: "Federal program providing reduced-cost phone or internet service to qualifying low-income households.",
        url: "https://www.lifelinesupport.org",
        phone: "1-800-234-9473",
      },
    ],
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    color: "bg-rose-500/10 text-rose-700 dark:text-rose-400",
    resources: [
      {
        title: "NY State of Health — Marketplace",
        desc: "Apply for Medicaid, Child Health Plus, or subsidized health insurance through New York's official marketplace.",
        url: "https://nystateofhealth.ny.gov",
        phone: "1-855-766-7860",
      },
      {
        title: "Community Health Centers of the Hudson Valley",
        desc: "Federally qualified health centers offering primary care on a sliding-fee scale regardless of insurance status.",
        url: "https://www.chcofhv.org",
        phone: "(845) 331-1600",
      },
      {
        title: "Westchester Medical Center — Financial Assistance",
        desc: "Charity care and financial assistance programs for uninsured or underinsured patients.",
        url: "https://www.westchestermedicalcenter.org/patients-visitors/billing-insurance/financial-assistance",
        phone: "(914) 493-7000",
      },
      {
        title: "211 NY — Health Services Finder",
        desc: "Find local mental health, substance use, dental, and specialty care programs in your area.",
        url: "https://www.211nys.org",
        phone: "211",
      },
    ],
  },
  {
    name: "Benefits & Income",
    icon: DollarSign,
    color: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
    resources: [
      {
        title: "NY Benefits — myBenefits Portal",
        desc: "Apply for SNAP, Medicaid, cash assistance, and other NY State programs in one place.",
        url: "https://www.mybenefits.ny.gov",
        phone: "1-800-342-3009",
      },
      {
        title: "Social Security Administration",
        desc: "Apply for Social Security Disability Insurance (SSDI) or Supplemental Security Income (SSI).",
        url: "https://www.ssa.gov",
        phone: "1-800-772-1213",
      },
      {
        title: "Westchester County DSS",
        desc: "Local Department of Social Services for Westchester residents — benefits, emergency assistance, and referrals.",
        url: "https://www.westchestergov.com/dss",
        phone: "(914) 995-5000",
      },
      {
        title: "Ulster County DSS",
        desc: "Local social services for Ulster County residents — SNAP, Medicaid, housing, and emergency assistance.",
        url: "https://ulstercountyny.gov/social-services",
        phone: "(845) 334-5000",
      },
    ],
  },
  {
    name: "Orange County",
    icon: MapPin,
    color: "bg-orange-500/10 text-orange-700 dark:text-orange-400",
    resources: [
      {
        title: "Orange County DSS",
        desc: "Local Department of Social Services — SNAP, Medicaid, cash assistance, HEAP, and emergency programs for Orange County residents.",
        url: "https://www.orangecountygov.com/141/Social-Services",
        phone: "(845) 291-2000",
      },
      {
        title: "Community Action of Orange County (CAOC)",
        desc: "Emergency food, utility assistance, housing support, and referrals for low-income Orange County households.",
        url: "https://www.caoc.us",
        phone: "(845) 342-7731",
      },
      {
        title: "Catholic Charities — Orange, Sullivan & Putnam",
        desc: "Food pantries, emergency financial assistance, immigration assistance referrals, and social services.",
        url: "https://catholiccharitiesny.org",
        phone: "(845) 834-8058",
      },
      {
        title: "Orange County Dept of Health",
        desc: "Public health programs, insurance enrollment assistance, and connections to local healthcare providers.",
        url: "https://www.orangecountygov.com/164/Health-Department",
        phone: "(845) 291-2332",
      },
    ],
  },
  {
    name: "Sullivan County",
    icon: MapPin,
    color: "bg-teal-500/10 text-teal-700 dark:text-teal-400",
    resources: [
      {
        title: "Sullivan County DSS",
        desc: "Local Department of Social Services — benefits applications, emergency assistance, Medicaid, and SNAP for Sullivan County residents.",
        url: "https://www.sullivanny.us/Departments/SocialServices",
        phone: "(845) 807-0511",
      },
      {
        title: "Sullivan County Community Action Program (SCCAP)",
        desc: "Emergency food, utility shutoff prevention, housing assistance, and case management for low-income Sullivan County residents.",
        url: "https://www.scca.org",
        phone: "(845) 292-7166",
      },
      {
        title: "Catholic Charities — Orange, Sullivan & Putnam",
        desc: "Food pantries, emergency financial assistance, and social services throughout the tri-county area.",
        url: "https://catholiccharitiesny.org",
        phone: "(845) 834-8058",
      },
      {
        title: "Sullivan County Public Health",
        desc: "Public health services, health insurance enrollment help, and referrals to local healthcare and mental health programs.",
        url: "https://www.sullivanny.us/Departments/PublicHealth",
        phone: "(845) 292-5910",
      },
    ],
  },
  {
    name: "Ulster County",
    icon: MapPin,
    color: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400",
    resources: [
      {
        title: "Ulster County DSS",
        desc: "Local Department of Social Services — SNAP, Medicaid, cash assistance, and emergency programs for Ulster County residents.",
        url: "https://ulstercountyny.gov/social-services",
        phone: "(845) 334-5000",
      },
      {
        title: "PathStone — Ulster County",
        desc: "Community action organization offering emergency assistance, housing support, food access, and financial coaching.",
        url: "https://www.pathstone.org",
        phone: "(845) 331-8963",
      },
      {
        title: "Family of Woodstock",
        desc: "24/7 crisis helpline, emergency food and shelter, and referrals to community resources across Ulster County.",
        url: "https://www.familyofwoodstock.org",
        phone: "(845) 679-2485",
      },
      {
        title: "RUPCO — Housing & Community Development",
        desc: "Affordable housing, rental assistance, and homeowner support programs serving Ulster County and the broader Hudson Valley.",
        url: "https://www.rupco.org",
        phone: "(845) 331-2140",
      },
    ],
  },
  {
    name: "Get Help Now",
    icon: Phone,
    color: "bg-accent/10 text-accent",
    resources: [
      {
        title: "211 NY — All Services",
        desc: "Dial or text 211 for free referrals to health and human services programs anywhere in New York, 24/7.",
        url: "https://www.211nys.org",
        phone: "211",
      },
      {
        title: "Hudson Valley 2-1-1",
        desc: "Local 211 line serving Dutchess, Orange, Sullivan, and Ulster counties with direct referrals.",
        url: "https://www.211nys.org",
        phone: "211",
      },
      {
        title: "Beyond Barriers Access — Intake Form",
        desc: "We can help you navigate any of these programs. Submit an intake form and we will guide you step by step.",
        url: "#contact",
        phone: "beyondbarriersaccess@gmail.com",
      },
    ],
  },
];

export function Resources() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resources" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold font-serif text-foreground mb-4">
              Local <span className="text-accent">resources</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Real programs serving Hudson Valley and Westchester residents — organized by category so you can find what you need quickly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Button
              variant="outline"
              onClick={handlePrint}
              className="flex items-center gap-2 border-primary/30 hover:bg-primary/5 font-semibold"
              data-testid="button-print-guide"
            >
              <Printer className="w-4 h-4" />
              Print Resource Guide
            </Button>
          </motion.div>
        </div>

        <div id="print-resource-guide" className="space-y-12">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.05 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cat.color}`}>
                  <cat.icon className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-foreground">{cat.name}</h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {cat.resources.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-card border border-border rounded-xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow"
                    data-testid={`card-resource-${catIdx}-${idx}`}
                  >
                    <h4 className="font-bold text-foreground leading-snug">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{item.desc}</p>
                    <div className="flex flex-col gap-1 pt-1 border-t border-border text-sm">
                      {item.phone && (
                        <span className="font-semibold text-foreground">{item.phone}</span>
                      )}
                      {item.url && item.url !== "#contact" && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-accent hover:underline font-medium"
                          data-testid={`link-resource-${catIdx}-${idx}`}
                        >
                          Visit website <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {item.url === "#contact" && (
                        <a
                          href="#contact"
                          onClick={(e) => {
                            e.preventDefault();
                            const el = document.querySelector("#contact");
                            if (el) {
                              const top = el.getBoundingClientRect().top + window.scrollY - 80;
                              window.scrollTo({ top, behavior: "smooth" });
                            }
                          }}
                          className="inline-flex items-center gap-1 text-accent hover:underline font-medium"
                        >
                          Submit intake form <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-12 text-sm text-muted-foreground text-center max-w-2xl mx-auto"
        >
          Resource listings are provided for informational purposes only. Beyond Barriers Access does not represent or guarantee services offered by third-party organizations. Contact us if you need help navigating any of these programs.
        </motion.p>
      </div>
    </section>
  );
}
