
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-industrial-dark/80 backdrop-blur-lg shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-gold text-2xl font-bold">
            Schöberle <span className="text-white">Industry</span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#about"
              className="text-white hover:text-gold transition-colors duration-300"
            >
              O nás
            </a>
            <a
              href="#services"
              className="text-white hover:text-gold transition-colors duration-300"
            >
              Služby
            </a>
            <a
              href="#contact"
              className="text-white hover:text-gold transition-colors duration-300"
            >
              Kontakt
            </a>
            <a
              href="#contact"
              className="px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-industrial-dark transition-all duration-300 rounded-md"
            >
              Kontaktujte nás
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gold" />
            ) : (
              <Menu className="h-6 w-6 text-gold" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass my-4 p-4 animate-fade-in rounded-lg">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-white hover:text-gold transition-colors duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                O nás
              </a>
              <a
                href="#services"
                className="text-white hover:text-gold transition-colors duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Služby
              </a>
              <a
                href="#contact"
                className="text-white hover:text-gold transition-colors duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </a>
              <a
                href="#contact"
                className="px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-industrial-dark transition-all duration-300 rounded-md text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontaktujte nás
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
