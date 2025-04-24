import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CookieConsentBanner = () => {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const navigate = useNavigate();

  // Kontrola souhlasu s cookies při načtení stránky a při změně v localStorage
  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setShowBanner(true);
      } else {
        setShowBanner(false);
      }
    };

    // Zkontrolujeme souhlas při načtení
    checkConsent();

    // Přidáme listener pro zjištění změn v localStorage
    window.addEventListener('storage', checkConsent);

    // Cleanup při unmount
    return () => {
      window.removeEventListener('storage', checkConsent);
    };
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({ 
      necessary: true, 
      analytics: true, 
      marketing: true,
      preferences: true 
    }));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({ 
      necessary: true, 
      analytics: false, 
      marketing: false,
      preferences: false 
    }));
    setShowBanner(false);
  };

  const openSettings = () => {
    // Otevřít stránku s nastavením cookies pomocí React Router
    navigate('/gdpr/cookies');
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div 
          className="fixed bottom-0 w-full z-50 bg-industrial-dark text-white shadow-lg p-4 md:p-6"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <div className="container mx-auto">
            <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gold">{t('cookie.title')}</h3>
                <p className="mb-4">{t('cookie.description')}</p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <a href="/gdpr/privacy-policy" className="text-gold hover:underline">
                    {t('cookie.privacy_policy')}
                  </a>
                  <span>|</span>
                  <a href="/gdpr/cookies" className="text-gold hover:underline">
                    {t('cookie.cookie_policy')}
                  </a>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2 items-center justify-end">
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-industrial-dark w-full md:w-auto"
                  onClick={acceptNecessary}
                >
                  {t('cookie.necessary_only')}
                </Button>
                <Button
                  variant="outline"
                  className="border-zinc-600 text-zinc-300 hover:border-zinc-400 hover:text-white w-full md:w-auto"
                  onClick={openSettings}
                >
                  {t('cookie.settings')}
                </Button>
                <Button
                  className="bg-gold text-industrial-dark hover:bg-gold/90 w-full md:w-auto"
                  onClick={acceptAll}
                >
                  {t('cookie.accept')}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentBanner; 