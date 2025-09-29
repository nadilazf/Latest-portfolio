function Footer() {
  try {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <footer className="bg-[var(--accent-color)] text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-gray-300">
                Business System Analyst & Technical Writer helping companies create clear, comprehensive documentation.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <button 
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-gray-300 hover:text-white transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-gray-300 hover:text-white transition-colors"
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Connect</h4>
              <div className="flex space-x-4">
                <a href="mailto:sarah@techwriter.com" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <div className="icon-mail text-white"></div>
                </a>
                <a href="https://linkedin.com/in/sarahjohnson" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <div className="icon-linkedin text-white"></div>
                </a>
                <a href="https://github.com/sarahjohnson" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <div className="icon-github text-white"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Nadila Zari Fani. All rights reserved.
            </p>
            <button 
              onClick={scrollToTop}
              className="mt-4 sm:mt-0 flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <span className="text-sm">Back to top</span>
              <div className="icon-arrow-up"></div>
            </button>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}