const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-secondary pt-16">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Reliable Construction Services<br />
          <span className="text-accent">You Can Trust</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Quality craftsmanship and honest work for your home improvement projects.
        </p>
        <a
          href="#contact"
          className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
