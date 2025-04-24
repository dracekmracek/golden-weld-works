import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
// import ReactFlagsSelect from "react-flags-select";  // Odstraňuji import, protože už jej nepoužíváme
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

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

  // Přidávám efekt na zavření dropdownu při kliknutí mimo
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLanguageChange = (code: string) => {
    setLanguage(code);
    setDropdownOpen(false);
  };

  // Převod kódu na označení jazyka
  const getLanguageLabel = (code: string) => {
    switch(code) {
      case 'CZ': return 'CZ';
      case 'DE': return 'DE';
      case 'GB': return 'EN';
      default: return code;
    }
  };

  // Vlastní komponenta jazykového přepínače
  const LanguageSelector = () => (
    <div ref={dropdownRef} className="relative">
      <button 
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center text-white hover:text-gold transition-colors px-2 py-1 rounded"
      >
        <Globe size={18} className="text-gold mr-1" />
        <span>{getLanguageLabel(language)}</span>
        <ChevronDown size={16} className={`ml-1 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 py-2 w-24 bg-industrial-dark border border-gold/20 rounded-md shadow-lg z-50">
          <button 
            onClick={() => handleLanguageChange('CZ')}
            className={`w-full text-left px-4 py-2 hover:bg-gold/10 ${language === 'CZ' ? 'text-gold' : 'text-white'}`}
          >
            CZ
          </button>
          <button 
            onClick={() => handleLanguageChange('DE')}
            className={`w-full text-left px-4 py-2 hover:bg-gold/10 ${language === 'DE' ? 'text-gold' : 'text-white'}`}
          >
            DE
          </button>
          <button 
            onClick={() => handleLanguageChange('GB')}
            className={`w-full text-left px-4 py-2 hover:bg-gold/10 ${language === 'GB' ? 'text-gold' : 'text-white'}`}
          >
            EN
          </button>
        </div>
      )}
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center ${
        isScrolled
          ? "bg-industrial-dark/80 backdrop-blur-lg shadow-md h-16 py-3"
          : "bg-transparent h-20 py-5"
      }`}
    >
      <div className="container relative mx-auto px-4 md:px-6 w-full">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/logo-no-background.png" 
              alt="Schöberle Industry Logo" 
              className="h-12 mr-2 transition-all duration-300"
            />
            <div className="flex flex-col md:flex-row md:items-center">
              <span className="text-gold font-bold text-lg leading-tight md:text-2xl">Schöberle</span>
              <span className="text-white font-bold text-lg leading-tight md:text-2xl md:ml-1">Industry</span>
            </div>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-white hover:text-gold transition-colors duration-300"
            >
              {t('navbar.about')}
            </a>
            <a
              href="#services"
              className="text-white hover:text-gold transition-colors duration-300"
            >
              {t('navbar.services')}
            </a>
            
            {/* Nový jazykový přepínač pro desktop */}
            <LanguageSelector />
            
            <a
              href="#contact"
              className="px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-industrial-dark transition-all duration-300 rounded-md"
            >
              {t('navbar.contact')}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none flex items-center"
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
          <div className="absolute left-0 right-0 top-full md:hidden glass bg-industrial-dark/95 mt-2 p-4 animate-fade-in rounded-lg shadow-lg z-40">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-white hover:text-gold transition-colors duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('navbar.about')}
              </a>
              <a
                href="#services"
                className="text-white hover:text-gold transition-colors duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('navbar.services')}
              </a>
              
              {/* Jazykový přepínač pro mobil */}
              <div className="flex items-center py-2">
                <span className="text-white mr-2">{t('navbar.language')}:</span>
                <LanguageSelector />
              </div>
              
              <a
                href="#contact"
                className="px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-industrial-dark transition-all duration-300 rounded-md text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('navbar.contact')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
