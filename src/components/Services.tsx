const services = [
  {
    title: "Renovations",
    description: "Complete home and room renovations tailored to your vision.",
  },
  {
    title: "Repairs",
    description: "Quick and reliable repairs for any part of your property.",
  },
  {
    title: "Flooring",
    description: "Installation and refinishing of hardwood, tile, and laminate.",
  },
  {
    title: "Painting",
    description: "Interior and exterior painting with professional finish.",
  },
  {
    title: "General Construction",
    description: "From framing to finishing, complete construction services.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card p-6 rounded-lg border border-border"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
