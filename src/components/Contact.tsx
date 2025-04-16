
import { useState } from "react";
import { Phone, Mail, MapPin, Send, Facebook, Instagram } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would handle form submission here
    console.log("Form submitted:", formData);
    alert("Děkujeme za váš zájem! Brzy se vám ozveme.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-industrial-dark relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-industrial to-industrial-dark opacity-70"></div>
      
      {/* Sparks effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.2,
              animation: `float ${Math.random() * 4 + 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Spojme síly a </span>
            <span className="gold-text">dosáhněme velkých úspěchů</span>
          </h2>
          
          <p className="text-gray-300 text-lg">
            Kontaktujte nás pro nezávaznou konzultaci vašich potřeb. Náš tým je připraven 
            navrhnout optimální řešení pro váš projekt.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ScrollAnimation>
              <div className="glass p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Kontaktní údaje</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-industrial flex items-center justify-center rounded-lg mr-4 border border-gold/30">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-gold font-medium mb-1">Fakturační údaje</h4>
                    <p className="text-white">Schöberle industry</p>
                    <p className="text-gray-300">Děrenská 574, Fulnek 742 45</p>
                    <p className="text-gray-300">Česká Republika</p>
                    <p className="text-gray-400 mt-1">
                      IČO: 17800579<br />
                      DIČ: CZ17800579
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-industrial flex items-center justify-center rounded-lg mr-4 border border-gold/30">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-gold font-medium mb-1">Telefon</h4>
                    <p className="text-white">+420 736 678 454</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-industrial flex items-center justify-center rounded-lg mr-4 border border-gold/30">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-gold font-medium mb-1">Email</h4>
                    <p className="text-white">info@schoberle-industry.cz</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-white font-medium mb-4">Sledujte nás</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-industrial border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-industrial-dark transition-all duration-300">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-industrial border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-industrial-dark transition-all duration-300">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            </ScrollAnimation>
          </div>
          
          <div>
            <ScrollAnimation delay={200}>
              <div className="glass p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Napište nám</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gold-light mb-2">Jméno</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-industrial-light/50 border border-gold/10 rounded-md focus:outline-none focus:border-gold/30 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gold-light mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-industrial-light/50 border border-gold/10 rounded-md focus:outline-none focus:border-gold/30 text-white"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gold-light mb-2">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-industrial-light/50 border border-gold/10 rounded-md focus:outline-none focus:border-gold/30 text-white"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gold-light mb-2">Zpráva</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-industrial-light/50 border border-gold/10 rounded-md focus:outline-none focus:border-gold/30 text-white resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gold text-industrial-dark font-semibold rounded-md flex items-center justify-center transition-all duration-300 hover:bg-gold-dark"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Odeslat zprávu
                </button>
              </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-gold-light font-medium mb-2">Kvalita, na kterou se můžete spolehnout</p>
          <p className="text-gray-300">
            © {new Date().getFullYear()} Schöberle Industry. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
