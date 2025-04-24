import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-industrial-dark border-t border-gold/10 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img 
                src="/logo-no-background.png" 
                alt="Schöberle Industry Logo" 
                className="h-10 mr-2"
              />
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="text-gold font-bold text-base leading-tight md:text-xl">Schöberle</span>
                <span className="text-white font-bold text-base leading-tight md:text-xl md:ml-1">Industry</span>
              </div>
            </a>
          </div>
          

          
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <a 
              href="https://www.facebook.com/Schoberleindustry" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-industrial border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-industrial-dark transition-all duration-300"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a 
              href="https://www.instagram.com/schoberle_industry/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-industrial border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-industrial-dark transition-all duration-300"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a href="mailto:info@schoberle-industry.cz" className="w-9 h-9 bg-industrial border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-industrial-dark transition-all duration-300">
              <Mail className="h-4 w-4" />
            </a>
            <a href="tel:+420736678454" className="w-9 h-9 bg-industrial border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-industrial-dark transition-all duration-300">
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gold/5 mt-8 pt-8 text-center">
          <p className="text-gold-light font-medium mb-2">{t('footer_page.slogan')}</p>
          <p className="text-gray-400 text-sm">
            {t('footer_page.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex justify-center gap-4 mt-4 text-sm text-gray-400">
            <Link to="/gdpr/privacy-policy" className="hover:text-gold transition-colors">
              {t('footer.privacy')}
            </Link>
            <span>|</span>
            <Link to="/gdpr/terms" className="hover:text-gold transition-colors">
              {t('footer.terms')}
            </Link>
            <span>|</span>
            <Link to="/gdpr/cookies" className="hover:text-gold transition-colors">
              {t('legal.cookies.title')}
            </Link>
          </div>
          <div className="mt-3 text-xs text-gray-500">
            Web vytvořil <a href="https://webseidon.cz" target="_blank" rel="noopener noreferrer" className="text-gold-light hover:text-gold transition-colors">WEBSEIDON</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
