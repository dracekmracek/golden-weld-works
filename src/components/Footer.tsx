
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-industrial-dark border-t border-gold/10 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-gold text-2xl font-bold">
              Schöberle <span className="text-white">Industry</span>
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <a href="#about" className="text-gray-300 hover:text-gold transition-colors">O nás</a>
            <a href="#services" className="text-gray-300 hover:text-gold transition-colors">Služby</a>
            <a href="#contact" className="text-gray-300 hover:text-gold transition-colors">Kontakt</a>
          </div>
          
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <a href="#" className="w-9 h-9 bg-industrial border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-industrial-dark transition-all duration-300">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="w-9 h-9 bg-industrial border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-industrial-dark transition-all duration-300">
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
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Schöberle Industry. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
