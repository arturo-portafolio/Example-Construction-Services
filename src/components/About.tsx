const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            I'm an independent contractor with over 15 years of experience in residential 
            and commercial construction. I take pride in delivering quality work on time 
            and within budget. Whether it's a small repair or a complete renovation, 
            I treat every project with the same dedication and attention to detail. 
            My reputation is built on honest communication and craftsmanship you can rely on.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
