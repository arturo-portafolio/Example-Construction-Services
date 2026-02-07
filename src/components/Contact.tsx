import { Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Get In Touch
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          <a
            href="tel:+15551234567"
            className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent transition-colors"
          >
            <div className="bg-accent/10 p-3 rounded-full">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Call me</p>
              <p className="text-lg font-semibold text-foreground">(555) 123-4567</p>
            </div>
          </a>
          <a
            href="mailto:contact@exampleconstruction.com"
            className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent transition-colors"
          >
            <div className="bg-accent/10 p-3 rounded-full">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email me</p>
              <p className="text-lg font-semibold text-foreground">contact@exampleconstruction.com</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
