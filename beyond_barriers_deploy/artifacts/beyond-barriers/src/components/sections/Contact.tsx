import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  county: z.string().min(2, "County is required"),
  service: z.string().min(2, "Please describe what you need help with"),
  message: z.string().min(10, "Please provide a brief description of your situation"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      county: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (_data: FormValues) => {
    setTimeout(() => {
      toast({
        title: "Inquiry received",
        description: "Thank you for reaching out. We will follow up with you by email as soon as possible.",
      });
      form.reset();
    }, 500);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold font-serif text-foreground mb-6">
              Get in <span className="text-accent">touch.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Fill out the intake form and we will follow up to schedule an appointment. You can also email us directly.
            </p>

            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-1">Email</h4>
                <a
                  href="mailto:beyondbarriersaccess@gmail.com"
                  className="text-accent hover:underline"
                  data-testid="link-email"
                >
                  beyondbarriersaccess@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground block mb-1">Please note</strong>
              We do not provide legal advice, legal representation, immigration services, or tax preparation. We provide paperwork assistance and resource navigation only.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-xl border border-border"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Intake Form</h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full name" {...field} className="bg-background" data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Your email" {...field} className="bg-background" data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="county"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>County of Residence</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Ulster County" {...field} className="bg-background" data-testid="input-county" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What do you need help with?</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Benefits application, hardship letter" {...field} className="bg-background" data-testid="input-service" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Brief description of your situation</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Share as much or as little as you are comfortable with..."
                          className="min-h-[120px] resize-none bg-background"
                          {...field}
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12"
                  data-testid="button-submit"
                >
                  Submit Intake Form
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
