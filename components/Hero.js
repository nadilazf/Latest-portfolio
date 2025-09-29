function Hero() {
  try {
    const scrollToContact = () => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const scrollToPortfolio = () => {
      const element = document.getElementById('portfolio');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-[var(--secondary-color)] to-white" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gradient">Business System Analyst</span>
                  <br />
                  <span className="text-[var(--accent-color)]">& Technical Writer</span>
                </h1>
                <p className="text-lg text-[var(--text-secondary)] max-w-xl">
                  I help teams transform complex business requirements into clear documentation that drives alignment and accelerates product delivery. Specializing in Business Requirement Documents (BRD), Product Requirement Documents (PRD), user guides, and process documentation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={scrollToContact} className="btn-primary">
                  Get In Touch
                </button>
                <button onClick={scrollToPortfolio} className="btn-secondary">
                  View My Work
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="icon-check-circle text-lg text-green-600"></div>
                  <span className="text-sm text-[var(--text-secondary)]">2 Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="icon-users text-lg text-blue-600"></div>
                  <span className="text-sm text-[var(--text-secondary)]">10 Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="icon-award text-lg text-yellow-600"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Industry Recognized</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/trickle/assets/profile.jpeg" 
                    alt="Nadila Zari Fani - Business System Analyst"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--primary-color)] rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="icon-file-text text-2xl text-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}