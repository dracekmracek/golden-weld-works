import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ChevronLeft, FileText, Shield, Cookie, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';

const GdprIndex = () => {
  const { t, i18n } = useTranslation();
  
  // Zjištění aktuálního jazyka pro meta tagy
  const currentLang = i18n.language || 'cs';
  
  // Metadata pro SEO optimalizaci
  useEffect(() => {
    document.title = `GDPR a Ochrana osobních údajů | Schöberle Industry`;
  }, []);

  return (
    <div className="min-h-screen bg-industrial-dark text-white" style={{ overflowX: 'hidden' }}>
      <Helmet>
        <title>GDPR a Ochrana osobních údajů | Schöberle Industry</title>
        <meta name="description" content="Informace o ochraně osobních údajů, GDPR, cookies a podmínkách použití webových stránek společnosti Schöberle Industry, specialisty na průmyslové svařování a kovovýrobu." />
        <meta name="keywords" content="GDPR, ochrana osobních údajů, cookies, podmínky použití, Schöberle Industry, průmyslové svařování, zásady ochrany soukromí" />
        <meta property="og:title" content="GDPR a Ochrana osobních údajů | Schöberle Industry" />
        <meta property="og:description" content="Informace o ochraně osobních údajů, GDPR, cookies a podmínkách použití webových stránek společnosti Schöberle Industry." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://schoberle-industry.cz/gdpr" />
        <link rel="canonical" href={`https://schoberle-industry.cz/gdpr${currentLang !== 'cs' ? `?lang=${currentLang}` : ''}`} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12 md:pt-28 md:pb-16">
        <a 
          href="/" 
          className="inline-flex items-center text-gold hover:text-gold-light mb-6 transition-colors"
          aria-label="Zpět na hlavní stránku"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          {t('common.back_to_home')}
        </a>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gold mb-4">GDPR a Ochrana osobních údajů</h1>
        <p className="text-gray-300 mb-12 md:max-w-3xl">
          Na těchto stránkách najdete dokumenty týkající se ochrany osobních údajů, podmínek použití našich webových stránek a 
          zásad používání cookies. Vážíme si vašeho soukromí a chceme být transparentní ohledně toho, jak zpracováváme vaše údaje.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Karta pro zásady ochrany osobních údajů */}
          <div className="bg-industrial rounded-lg border border-zinc-700 overflow-hidden transition-all hover:border-gold/30 group">
            <div className="p-6">
              <div className="w-12 h-12 bg-industrial border border-gold/20 rounded-lg flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-industrial-dark transition-all">
                <Shield className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-semibold text-gold mb-2">{t('legal.privacy.title')}</h2>
              <p className="text-gray-300 mb-4">
                Informace o tom, jak zpracováváme vaše osobní údaje, jaká jsou vaše práva a jak je můžete uplatnit.
              </p>
              <a 
                href="/gdpr/privacy-policy" 
                className="inline-flex items-center text-gold hover:text-gold-light group-hover:text-gold-light"
                aria-label="Zobrazit zásady ochrany osobních údajů"
              >
                Zobrazit dokument
                <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
              </a>
            </div>
          </div>
          
          {/* Karta pro podmínky použití */}
          <div className="bg-industrial rounded-lg border border-zinc-700 overflow-hidden transition-all hover:border-gold/30 group">
            <div className="p-6">
              <div className="w-12 h-12 bg-industrial border border-gold/20 rounded-lg flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-industrial-dark transition-all">
                <FileText className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-semibold text-gold mb-2">{t('legal.terms.title')}</h2>
              <p className="text-gray-300 mb-4">
                Pravidla a podmínky pro používání našich webových stránek, včetně informací o autorských právech.
              </p>
              <a 
                href="/gdpr/terms" 
                className="inline-flex items-center text-gold hover:text-gold-light group-hover:text-gold-light"
                aria-label="Zobrazit obchodní podmínky"
              >
                Zobrazit dokument
                <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
              </a>
            </div>
          </div>
          
          {/* Karta pro cookies */}
          <div className="bg-industrial rounded-lg border border-zinc-700 overflow-hidden transition-all hover:border-gold/30 group">
            <div className="p-6">
              <div className="w-12 h-12 bg-industrial border border-gold/20 rounded-lg flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-industrial-dark transition-all">
                <Cookie className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-semibold text-gold mb-2">{t('legal.cookies.title')}</h2>
              <p className="text-gray-300 mb-4">
                Informace o tom, jak používáme cookies a podobné technologie, a jak můžete spravovat svoje preference.
              </p>
              <a 
                href="/gdpr/cookies" 
                className="inline-flex items-center text-gold hover:text-gold-light group-hover:text-gold-light"
                aria-label="Zobrazit zásady cookies"
              >
                Zobrazit dokument
                <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GdprIndex; 