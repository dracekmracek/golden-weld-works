import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { cs } from 'date-fns/locale';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ChevronLeft } from 'lucide-react';

const CookiePolicy = () => {
  const { t, i18n } = useTranslation();
  
  // Stavy pro checkboxy
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);
  const [preferencesEnabled, setPreferencesEnabled] = useState(false);
  
  // Datum poslední aktualizace - můžete změnit dle potřeby
  const lastUpdated = new Date('2023-11-15');
  
  // Formátování data podle aktuálního jazyka
  const formattedDate = format(
    lastUpdated,
    'dd. MMMM yyyy',
    { locale: i18n.language === 'cs' ? cs : undefined }
  );
  
  // Načtení nastavení cookies při načtení stránky
  useEffect(() => {
    document.title = `${t('legal.cookies.title')} | Schöberle Industry`;
    
    try {
      const savedConsent = localStorage.getItem('cookieConsent');
      if (savedConsent) {
        const consentObj = JSON.parse(savedConsent);
        setAnalyticsEnabled(consentObj.analytics || false);
        setMarketingEnabled(consentObj.marketing || false);
        setPreferencesEnabled(consentObj.preferences || false);
      }
    } catch (error) {
      console.error('Chyba při načítání nastavení cookies:', error);
    }
  }, [t]);

  // Uložení pouze nezbytných cookies
  const saveNecessaryOnly = () => {
    setAnalyticsEnabled(false);
    setMarketingEnabled(false);
    setPreferencesEnabled(false);
    
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    }));
    
    // Přesměrovat zpět na předchozí stránku nebo domů
    window.history.back();
  };

  // Uložení všech vybraných cookies
  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
      preferences: preferencesEnabled
    }));
    
    // Přesměrovat zpět na předchozí stránku nebo domů
    window.history.back();
  };

  // Povolit všechny cookies
  const acceptAll = () => {
    setAnalyticsEnabled(true);
    setMarketingEnabled(true);
    setPreferencesEnabled(true);
    
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    }));
    
    // Přesměrovat zpět na předchozí stránku nebo domů
    window.history.back();
  };

  // Pomocná funkce pro získání polí z překladů
  const getCookieReasons = () => {
    const reasons = t('legal.cookies.sections.howWeUse.reasons', { returnObjects: true });
    return Array.isArray(reasons) ? reasons : [];
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
        
        <h1 className="text-3xl md:text-4xl font-bold text-gold mb-4">{t('legal.cookies.title')}</h1>
        <p className="text-gray-400 mb-8">{t('legal.cookies.updatedAt', { date: formattedDate })}</p>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-lg text-gray-200 mb-8">{t('legal.cookies.intro')}</p>
          
          {/* Co jsou cookies */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gold mb-4">{t('legal.cookies.sections.whatAreCookies.title')}</h2>
            <p className="mb-4">{t('legal.cookies.sections.whatAreCookies.content')}</p>
          </section>
          
          {/* Jak používáme cookies */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gold mb-4">{t('legal.cookies.sections.howWeUse.title')}</h2>
            <p className="mb-4">{t('legal.cookies.sections.howWeUse.content')}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {getCookieReasons().map((reason, index) => (
                <li key={index} className="text-gray-300">{reason}</li>
              ))}
            </ul>
          </section>
          
          {/* Vaše volby ohledně cookies */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gold mb-4">{t('legal.cookies.sections.yourChoices.title')}</h2>
            <p className="mb-4">{t('legal.cookies.sections.yourChoices.content')}</p>
          </section>
          
          {/* Nastavení cookies */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gold mb-4">{t('cookie.settings')}</h2>
            <p className="mb-6">{t('cookie.settings_description')}</p>
            
            <div className="bg-industrial rounded-lg p-6 mb-6 border border-zinc-700">
              <h3 className="text-xl font-semibold mb-4 text-gold">{t('cookie.necessary_title')}</h3>
              <p className="mb-2">{t('cookie.necessary_description')}</p>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="necessary" 
                  checked 
                  disabled
                  className="rounded border-zinc-600 h-4 w-4 text-gold focus:ring-gold"
                />
                <label htmlFor="necessary" className="ml-2 text-sm text-gray-300">
                  {t('cookie.always_active')}
                </label>
              </div>
            </div>
            
            <div className="bg-industrial rounded-lg p-6 mb-6 border border-zinc-700">
              <h3 className="text-xl font-semibold mb-4 text-gold">{t('cookie.analytics_title')}</h3>
              <p className="mb-2">{t('cookie.analytics_description')}</p>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="analytics" 
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  className="rounded border-zinc-600 h-4 w-4 text-gold focus:ring-gold"
                />
                <label htmlFor="analytics" className="ml-2 text-sm text-gray-300">
                  {analyticsEnabled ? t('cookie.activate') : t('cookie.activate')}
                </label>
              </div>
            </div>
            
            <div className="bg-industrial rounded-lg p-6 mb-6 border border-zinc-700">
              <h3 className="text-xl font-semibold mb-4 text-gold">{t('cookie.marketing_title')}</h3>
              <p className="mb-2">{t('cookie.marketing_description')}</p>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="marketing" 
                  checked={marketingEnabled}
                  onChange={(e) => setMarketingEnabled(e.target.checked)}
                  className="rounded border-zinc-600 h-4 w-4 text-gold focus:ring-gold"
                />
                <label htmlFor="marketing" className="ml-2 text-sm text-gray-300">
                  {marketingEnabled ? t('cookie.activate') : t('cookie.activate')}
                </label>
              </div>
            </div>
            
            <div className="bg-industrial rounded-lg p-6 mb-6 border border-zinc-700">
              <h3 className="text-xl font-semibold mb-4 text-gold">{t('cookie.preferences_title')}</h3>
              <p className="mb-2">{t('cookie.preferences_description')}</p>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="preferences" 
                  checked={preferencesEnabled}
                  onChange={(e) => setPreferencesEnabled(e.target.checked)}
                  className="rounded border-zinc-600 h-4 w-4 text-gold focus:ring-gold"
                />
                <label htmlFor="preferences" className="ml-2 text-sm text-gray-300">
                  {preferencesEnabled ? t('cookie.activate') : t('cookie.activate')}
                </label>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">
              <button
                onClick={saveNecessaryOnly}
                className="px-6 py-2 rounded-md bg-transparent border border-gold text-gold hover:bg-gold hover:text-industrial-dark transition-colors"
              >
                {t('cookie.necessary_only')}
              </button>
              <button
                onClick={savePreferences}
                className="px-6 py-2 rounded-md bg-transparent border border-zinc-600 text-white hover:border-zinc-400 transition-colors"
              >
                {t('cookie.save_preferences')}
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 rounded-md bg-gold text-industrial-dark hover:bg-gold/90 transition-colors"
              >
                {t('cookie.accept')}
              </button>
            </div>
          </section>
          
          {/* Odkazy na související dokumenty */}
          <section className="mt-12 pt-6 border-t border-zinc-700">
            <h3 className="text-xl font-semibold text-gold mb-4">{t('common.related_documents')}</h3>
            <div className="flex flex-col space-y-2">
              <a href="/gdpr/privacy-policy" className="text-gold hover:text-gold-light hover:underline">
                {t('legal.privacy.title')}
              </a>
              <a href="/gdpr/terms" className="text-gold hover:text-gold-light hover:underline">
                {t('legal.terms.title')}
              </a>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy; 