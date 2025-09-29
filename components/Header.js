function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };

    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[var(--border-color)]" data-name="header" data-file="components/Header.js">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-[var(--accent-color)]">Nadila Zari Fani</h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Contact
              </button>
            </nav>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <div className={`icon-menu text-xl ${isMenuOpen ? 'text-[var(--primary-color)]' : 'text-[var(--text-secondary)]'}`}></div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-[var(--border-color)]">
              <nav className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('home')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection('portfolio')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  Portfolio
                </button>
                <button onClick={() => scrollToSection('experience')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  Experience
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  Contact
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}