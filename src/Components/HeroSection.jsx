function HeroSection() {
  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-section-content-box">
        <div className="hero-section-content">
          <p className="section-title"> Hey, I'm Dheeraj Maddi</p>
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">Full Stack</span> <br />{" "}
            Developer
          </h1>
          <p className="hero-section-description">
            Master's degree in Computer Science <br />I possess a solid
            educational foundation and a strong passion for coding, eager to
            apply my classroom learning to real-world projects.
          </p>
        </div>
        <a
          className="btn btn-primary"
          href="https://www.linkedin.com/in/dheerajmaddi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get In Touch
        </a>{" "}
      </div>
      <div className="hero-section-img">
        <img src="./img/hero_img.jpeg" alt="Hero Section" />
      </div>
    </section>
  );
}
export default HeroSection;
