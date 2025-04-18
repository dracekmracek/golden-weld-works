import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const handleLanguageChange = (code: string) => {
    setLanguage(code);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-industrial-dark/80 backdrop-blur-lg shadow-md py-3 min-h-[70px]"
          : "bg-transparent py-4"
      } flex items-center`}
    >
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="flex justify-between items-center">
          <a href="#" className="text-gold text-2xl font-bold flex items-center">
            Schöberle <span className="text-white">Industry</span>
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
            
            {/* Jazykový přepínač pro desktop */}
            <div className="language-selector flex items-center">
              <ReactFlagsSelect
                selected={language}
                onSelect={handleLanguageChange}
                countries={["CZ", "DE", "GB"]}
                customLabels={{ CZ: "CZ", DE: "DE", GB: "EN" }}
                placeholder={<Globe size={18} className="text-gold" />}
                selectButtonClassName="flag-select-button"
                className="language-selector-container"
                optionsSize={14}
                fullWidth={false}
              />
            </div>
            
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
          <div className="md:hidden glass my-4 p-4 animate-fade-in rounded-lg">
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
              <div className="language-selector flex items-center py-2">
                <span className="text-white mr-2">{t('navbar.language')}:</span>
                <ReactFlagsSelect
                  selected={language}
                  onSelect={handleLanguageChange}
                  countries={["CZ", "DE", "GB"]}
                  customLabels={{ CZ: "CZ", DE: "DE", GB: "EN" }}
                  placeholder={<Globe size={18} className="text-gold" />}
                  selectButtonClassName="flag-select-button"
                  className="language-selector-container"
                  optionsSize={14}
                  fullWidth={false}
                />
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
