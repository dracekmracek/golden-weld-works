import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { cs } from 'date-fns/locale';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ChevronLeft } from 'lucide-react';

const TermsOfUse = () => {
  const { t, i18n } = useTranslation();
  
  // Datum poslední aktualizace - můžete změnit dle potřeby
  const lastUpdated = new Date('2023-11-15');
  
  // Formátování data podle aktuálního jazyka
  const formattedDate = format(
    lastUpdated,
    'dd. MMMM yyyy',
    { locale: i18n.language === 'cs' ? cs : undefined }
  );
  
  // Metadata pro SEO optimalizaci
  useEffect(() => {
    document.title = `${t('legal.terms.title')} | Schöberle Industry`;
  }, [t]);

  // Pomocná funkce pro získání polí z překladů
  const getRestrictionsList = () => {
    const restrictions = t('legal.terms.sections.restrictions.restrictionsList', { returnObjects: true });
    return Array.isArray(restrictions) ? restrictions : [];
  };

  return (
    <div className="min-h-screen bg-industrial-dark text-white" style={{ overflowX: 'hidden' }}>
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12 md:pt-28 md:pb-16">
        <a 
          href="/" 
          className="inline-flex items-center text-gold hover:text-gold-light mb-6 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          {t('common.back_to_home')}
        </a>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gold mb-4">{t('legal.terms.title')}</h1>
        <p className="text-gray-400 mb-8">{t('legal.terms.updatedAt', { date: formattedDate })}</p>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-lg text-gray-200 mb-8">{t('legal.terms.intro')}</p>
          
          {/* Přístup k webovým stránkám */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gold mb-4">{t('legal.terms.sections.access.title')}</h2>
            <p className="mb-4">{t('legal.terms.sections.access.content')}</p>
          </section>
          
          {/* Duševní vlastnictví */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gold mb-4">{t('legal.terms.sections.intellectualProperty.title')}</h2>
            <p className="mb-4">{t('legal.terms.sections.intellectualProperty.content')}</p>
          </section>
          
          {/* Omezení */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gold mb-4">{t('legal.terms.sections.restrictions.title')}</h2>
            <p className="mb-4">{t('legal.terms.sections.restrictions.content')}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {getRestrictionsList().map((restriction, index) => (
                <li key={index} className="text-gray-300">{restriction}</li>
              ))}
            </ul>
          </section>
          
          {/* Uživatelský obsah */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gold mb-4">{t('legal.terms.sections.userContent.title')}</h2>
            <p className="mb-4">{t('legal.terms.sections.userContent.content')}</p>
          </section>
          
          {/* Odpovědnost */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gold mb-4">{t('legal.terms.sections.liability.title')}</h2>
            <p className="mb-4">{t('legal.terms.sections.liability.content')}</p>
          </section>
          
          {/* Odkazy na třetí strany */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gold mb-4">{t('legal.terms.sections.links.title')}</h2>
            <p className="mb-4">{t('legal.terms.sections.links.content')}</p>
          </section>
          
          {/* Změny podmínek */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gold mb-4">{t('legal.terms.sections.changes.title')}</h2>
            <p>{t('legal.terms.sections.changes.content')}</p>
          </section>
          
          {/* Odkazy na související dokumenty */}
          <section className="mt-12 pt-6 border-t border-zinc-700">
            <h3 className="text-xl font-semibold text-gold mb-4">{t('common.related_documents')}</h3>
            <div className="flex flex-col space-y-2">
              <a href="/gdpr/privacy-policy" className="text-gold hover:text-gold-light hover:underline">
                {t('legal.privacy.title')}
              </a>
              <a href="/gdpr/cookies" className="text-gold hover:text-gold-light hover:underline">
                {t('legal.cookies.title')}
              </a>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfUse; 