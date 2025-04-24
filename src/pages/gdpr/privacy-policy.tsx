import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { cs } from 'date-fns/locale';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ChevronLeft } from 'lucide-react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  
  // Datum poslední aktualizace - můžete změnit dle potřeby
  const lastUpdated = new Date('2023-11-15');
  
  // Formátování data podle aktuálního jazyka
  const formattedDate = format(
    lastUpdated,
    'dd. MMMM yyyy',
    { locale: i18n.language === 'cs' ? cs : undefined }
  );
  
  // Zjištění aktuálního jazyka pro meta tagy
  const currentLang = i18n.language || 'cs';

  // Pomocné funkce pro získání polí z překladů
  const getDataUsagePurposes = () => {
    const purposes = t('legal.privacy.sections.dataUsage.purposes', { returnObjects: true });
    return Array.isArray(purposes) ? purposes : [];
  };

  const getCookiePurposes = () => {
    const purposes = t('legal.privacy.sections.cookies.purposes', { returnObjects: true });
    return Array.isArray(purposes) ? purposes : [];
  };

  const getRightsList = () => {
    const rights = t('legal.privacy.sections.rights.rightsList', { returnObjects: true });
    return Array.isArray(rights) ? rights : [];
  };

  return (
    <div className="min-h-screen bg-industrial-dark text-white" style={{ overflowX: 'hidden' }}>
      <Helmet>
        <title>{t('legal.privacy.title')} | Schöberle Industry</title>
        <meta name="description" content="Zásady ochrany osobních údajů společnosti Schöberle Industry. Informace o tom, jak zpracováváme vaše osobní údaje, za jakým účelem a jaká máte práva." />
        <meta name="keywords" content="ochrana osobních údajů, GDPR, soukromí, zpracování dat, práva subjektu údajů, Schöberle Industry, průmyslové svařování" />
        <meta property="og:title" content={`${t('legal.privacy.title')} | Schöberle Industry`} />
        <meta property="og:description" content="Informace o tom, jak zpracováváme vaše osobní údaje, za jakým účelem a jaká máte práva jako subjekt údajů." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://schoberle-industry.cz/gdpr/privacy-policy" />
        <link rel="canonical" href={`https://schoberle-industry.cz/gdpr/privacy-policy${currentLang !== 'cs' ? `?lang=${currentLang}` : ''}`} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12 md:pt-28 md:pb-16">
        <a 
          href="/" 
          className="inline-flex items-center text-gold hover:text-gold-light mb-6 transition-colors"
          aria-label="Zpět na hlavní stránku"
        >
          <ChevronLeft className="h-4 w-4 mr-1" aria-hidden="true" />
          {t('common.back_to_home')}
        </a>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gold mb-4">{t('legal.privacy.title')}</h1>
        <p className="text-gray-400 mb-8">{t('legal.privacy.updatedAt', { date: formattedDate })}</p>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-lg text-gray-200 mb-8">{t('legal.privacy.intro')}</p>
          
          {/* Shromažďování a používání informací */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gold mb-4">{t('legal.privacy.sections.dataCollection.title')}</h2>
            <p className="mb-4">{t('legal.privacy.sections.dataCollection.content')}</p>
          </section>
          
          {/* Použití dat */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gold mb-4">{t('legal.privacy.sections.dataUsage.title')}</h2>
            <p className="mb-4">{t('legal.privacy.sections.dataUsage.content')}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {getDataUsagePurposes().map((purpose, index) => (
                <li key={index} className="text-gray-300">{purpose}</li>
              ))}
            </ul>
          </section>
          
          {/* Cookies */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gold mb-4">{t('legal.privacy.sections.cookies.title')}</h2>
            <p className="mb-4">{t('legal.privacy.sections.cookies.content')}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {getCookiePurposes().map((purpose, index) => (
                <li key={index} className="text-gray-300">{purpose}</li>
              ))}
            </ul>
            <p className="mb-4">
              <a href="/gdpr/cookies" className="text-gold hover:text-gold-light underline" aria-label="Přejít na zásady cookies">
                {t('legal.cookies.title')}
              </a>
            </p>
          </section>
          
          {/* Bezpečnost */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gold mb-4">{t('legal.privacy.sections.security.title')}</h2>
            <p className="mb-4">{t('legal.privacy.sections.security.content')}</p>
          </section>
          
          {/* Vaše práva */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gold mb-4">{t('legal.privacy.sections.rights.title')}</h2>
            <p className="mb-4">{t('legal.privacy.sections.rights.content')}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {getRightsList().map((right, index) => (
                <li key={index} className="text-gray-300">{right}</li>
              ))}
            </ul>
          </section>
          
          {/* Kontaktní informace */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gold mb-4">{t('legal.privacy.sections.contact.title')}</h2>
            <p>{t('legal.privacy.sections.contact.content')}</p>
          </section>

          {/* Strukturovaná data pro vyhledávače */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "${t('legal.privacy.title')}",
              "description": "Zásady ochrany osobních údajů společnosti Schöberle Industry",
              "publisher": {
                "@type": "Organization",
                "name": "Schöberle Industry",
                "logo": "https://schoberle-industry.cz/logo.png"
              },
              "dateModified": "${lastUpdated.toISOString()}"
            }
          `}} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 