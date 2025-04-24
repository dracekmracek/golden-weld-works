import { useState } from "react";
import { Phone, Mail, MapPin, Send, Facebook, Instagram } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    setFormSubmitted(false);
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
            <span className="text-white">{t('contact_page.main_title_part1')} </span>
            <span className="gold-text">{t('contact_page.main_title_part2')}</span>
          </h2>
          
          <p className="text-gray-300 text-lg">
            {t('contact_page.section_description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="h-full flex">
            <ScrollAnimation className="w-full">
              <div className="glass p-8 h-full min-h-[600px]">
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact_page.contact_details_title')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-industrial flex items-center justify-center rounded-lg mr-4 border border-gold/30">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-gold font-medium mb-1">{t('contact_page.billing_info_title')}</h4>
                    <p className="text-white">Schöberle industry</p>
                    <p className="text-gray-300">Děrenská 574, Fulnek 742 45</p>
                    <p className="text-gray-300">{t('contact_page.country')}</p>
                    <p className="text-gray-400 mt-1">
                      IČO: 17800579<br />
                      DIČ: CZ17800579
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 aspect-square bg-industrial flex items-center justify-center rounded-lg mr-4 border border-gold/30">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-gold font-medium mb-1">{t('contact_page.phone_title')}</h4>
                    <div className="mb-1">
                      <p className="text-white">{t('contact_page.name_radim')}</p>
                      <a href="tel:+420736678454" className="text-white hover:text-gold-light transition-colors">+420 736 678 454</a>
                    </div>
                    <div>
                      <p className="text-white">{t('contact_page.name_dan')}</p>
                      <a href="tel:+420731047217" className="text-white hover:text-gold-light transition-colors">+420 731 047 217</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-industrial flex items-center justify-center rounded-lg mr-4 border border-gold/30">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-gold font-medium mb-1">{t('contact_page.email_title')}</h4>
                    <p className="text-white">info@schoberle-industry.cz</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-white font-medium mb-4">{t('contact_page.social_media_title')}</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/Schoberleindustry" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-industrial border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-industrial-dark transition-all duration-300"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/schoberle_industry/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-industrial border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-industrial-dark transition-all duration-300"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            </ScrollAnimation>
          </div>
          
          <div className="h-full flex">
            <ScrollAnimation delay={200} className="w-full">
              <div className="glass p-8 h-full min-h-[600px]">
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact_page.form_title')}</h3>
              
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="bg-gold/10 border border-gold/30 rounded-lg p-6 text-center max-w-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gold mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <h4 className="text-xl font-semibold text-white mb-2">{t('contact_page.form_success_title')}</h4>
                    <p className="text-gray-300 mb-6">{t('contact_page.form_success_message')}</p>
                    <button
                      onClick={resetForm}
                      className="px-6 py-2 bg-gold text-industrial-dark font-semibold rounded-md transition-all duration-300 hover:bg-gold-dark"
                    >
                      {t('contact_page.form_send_another')}
                    </button>
                  </div>
                </div>
              ) : (
                <form 
                  action="https://formsubmit.co/info@webseidon.cz" 
                  method="POST"
                  onSubmit={() => setFormSubmitted(true)}
                >
                  {/* Formsubmit.co skryté pole pro přesměrování zpět na stránku */}
                  <input type="hidden" name="_next" value={window.location.href} />
                  
                  {/* Nastavení předmětu e-mailu */}
                  <input type="hidden" name="_subject" value="Nová zpráva z kontaktního formuláře!" />
                  
                  {/* Honeypot proti spamu */}
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  
                  {/* Vypnutí CAPTCHA */}
                  <input type="hidden" name="_captcha" value="false" />
                  
                  {/* Automatická odpověď */}
                  <input 
                    type="hidden" 
                    name="_autoresponse" 
                    value="Děkujeme za Vaši zprávu. Brzy se Vám ozveme." 
                  />
                  
                  {/* Formát e-mailu */}
                  <input type="hidden" name="_template" value="table" />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-gold-light mb-2">{t('contact_page.form_label_name')}</label>
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
                      <label htmlFor="email" className="block text-gold-light mb-2">{t('contact_page.form_label_email')}</label>
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
                    <label htmlFor="phone" className="block text-gold-light mb-2">{t('contact_page.form_label_phone')}</label>
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
                    <label htmlFor="message" className="block text-gold-light mb-2">{t('contact_page.form_label_message')}</label>
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
                    disabled={isSubmitting}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    {isSubmitting ? t('contact_page.form_button_sending') : t('contact_page.form_button_send')}
                  </button>
                </form>
              )}
              </div>
            </ScrollAnimation>
          </div>
        </div>
        
        {/* Sekce s mapou */}
        <ScrollAnimation delay={300}>
          <div className="mt-16 glass rounded-xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433.6550814245671!2d17.923623906092455!3d49.72446665174895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713c24c4df2bda3%3A0xf26e8254dac10532!2zRMSbcm7DqSA4OCwgNzQyIDQ1IEZ1bG5layAx!5e0!3m2!1scs!2scz!4v1745526570666!5m2!1scs!2scz" 
              width="100%" 
              height="450" 
              style={{ border:0 }} 
              allowFullScreen={false}
              loading="lazy" 
              referrerPolicy="no-referrer"
              title="Mapa sídla Schöberle Industry"
            >
            </iframe>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
